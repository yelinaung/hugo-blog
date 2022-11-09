+++
title = "Useful Postgres Queries"
date = "2022-11-09T11:44:41+08:00"
author = "Ye Lin Aung"
authorTwitter = "" #do not include @
cover = ""
tags = ["postgres", "til"]
keywords = ["postgres", "postgresql", "tils"]
description = ""
showFullContent = false
readingTime = false
hideComments = false
+++

I've been analyzing the Postgres databases at work and have collected some useful snippets. Here's some with the example output, using this site's [analystics](https://umami.is/) database.

Also, please check out the excellent [pgcli](https://www.pgcli.com/) for Postgres. For others databases, check out [dbcli](https://github.com/dbcli).


###### The basics
- List all the databases
```sql
--- list the databases
--- there is a "+" version for more info as well
--- \l+
\l
```

Example output
```
+-----------+--------+----------+------------+------------+-------------------+
| Name      | Owner  | Encoding | Collate    | Ctype      | Access privileges |
|-----------+--------+----------+------------+------------+-------------------|
| postgres  | umami2 | UTF8     | en_US.utf8 | en_US.utf8 | <null>            |
| template0 | umami2 | UTF8     | en_US.utf8 | en_US.utf8 | =c/umami2         |
|           |        |          |            |            | umami2=CTc/umami2 |
| template1 | umami2 | UTF8     | en_US.utf8 | en_US.utf8 | =c/umami2         |
|           |        |          |            |            | umami2=CTc/umami2 |
| umami     | umami2 | UTF8     | en_US.utf8 | en_US.utf8 | <null>            |
+-----------+--------+----------+------------+------------+-------------------+
```

- List all the tables in the database

```sql
--- list the tables
--- there is a "+" version for more info as well
--- \dt+
\dt;
```

Example output

```
+--------+--------------------+-------+--------+
| Schema | Name               | Type  | Owner  |
|--------+--------------------+-------+--------|
| public | _event_old         | table | umami2 |
| public | _prisma_migrations | table | umami2 |
| public | account            | table | umami2 |
| public | event              | table | umami2 |
| public | event_data         | table | umami2 |
| public | pageview           | table | umami2 |
| public | session            | table | umami2 |
| public | website            | table | umami2 |
+--------+--------------------+-------+--------+
```

- All info about a table
```sql
-- replace "website" with your table name
-- "d" here stands for describe
\d+ website;
```
Example output
```
+--------------+--------------------------+---------------------------------------------------------------+----------+--------------+-------------+
| Column       | Type                     | Modifiers                                                     | Storage  | Stats target | Description |
|--------------+--------------------------+---------------------------------------------------------------+----------+--------------+-------------|
| website_id   | integer                  |  not null default nextval('website_website_id_seq'::regclass) | plain    | <null>       | <null>      |
| website_uuid | uuid                     |  not null                                                     | plain    | <null>       | <null>      |
| user_id      | integer                  |  not null                                                     | plain    | <null>       | <null>      |
| name         | character varying(100)   |  not null                                                     | extended | <null>       | <null>      |
| domain       | character varying(500)   |                                                               | extended | <null>       | <null>      |
| share_id     | character varying(64)    |                                                               | extended | <null>       | <null>      |
| created_at   | timestamp with time zone |  default CURRENT_TIMESTAMP                                    | plain    | <null>       | <null>      |
+--------------+--------------------------+---------------------------------------------------------------+----------+--------------+-------------+
Indexes:
    "website_pkey" PRIMARY KEY, btree (website_id)
    "website_share_id_key" UNIQUE CONSTRAINT, btree (share_id)
    "website_website_uuid_key" UNIQUE CONSTRAINT, btree (website_uuid)
    "website_user_id_idx" btree (user_id)
    "website_website_uuid_idx" btree (website_uuid)
```

###### Database size

```sql
-- get the db size
SELECT t1.datname AS db_name,
        pg_size_pretty(pg_database_size(t1.datname)) AS db_size
 FROM pg_database t1
 ORDER BY pg_database_size(t1.datname) DESC;
```

Example output
```
+-----------+---------+
| db_name   | db_size |
|-----------+---------|
| umami     | 9761 kB |
| postgres  | 7969 kB |
| template1 | 7825 kB |
| template0 | 7825 kB |
+-----------+---------+
```
- [`pg_database`](https://www.postgresql.org/docs/current/catalog-pg-database.html) stores the information about the available databases.


###### Top 10 table sizes

```sql
--- Top 10 table sizes
SELECT schemaname AS table_schema,
    relname AS table_name,
    pg_size_pretty(pg_total_relation_size(relid)) AS total_size,
    pg_size_pretty(pg_relation_size(relid)) AS data_size,
    pg_size_pretty(pg_total_relation_size(relid) - pg_relation_size(relid))
       AS external_size
 FROM pg_catalog.pg_statio_user_tables
 ORDER BY pg_total_relation_size(relid) DESC,
          pg_relation_size(relid) DESC
 LIMIT 10;
```

Example output
```
+--------------+--------------------+------------+------------+----------+
| table_schema | table_name    | total_size | data_size  | external_size |
|--------------+--------------------+------------+------------+----------|
| public       | pageview      | 752 kB     | 240 kB     | 512 kB        |
| public       | session       | 384 kB     | 128 kB     | 256 kB        |
| public       | website       | 96 kB      | 8192 bytes | 88 kB         |
| public       | account       | 72 kB      | 8192 bytes | 64 kB         |
| public       | event         | 56 kB      | 0 bytes    | 56 kB         |
| public       | _event_old    | 40 kB      | 0 bytes    | 40 kB         |
| public       | event_data    | 24 kB      | 0 bytes    | 24 kB         |
+--------------+--------------------+------------+------------+----------+
```

#### A specific index size
```sql
\di+ website_website_uuid_idx;
```

Example output
```
+--------+--------------------------+-------+--------+-------+-------------+
| Schema | Name                     | Type  | Owner  | Size  | Description |
|--------+--------------------------+-------+--------+-------+-------------|
| public | website_website_uuid_idx | index | umami2 | 16 kB | <null>      |
+--------+--------------------------+-------+--------+-------+-------------+
```

##### Index size and other stats of all the table

```sql
--- index size and other stats
SELECT
    pt.tablename AS TableName
    ,t.indexname AS IndexName
    ,to_char(pc.reltuples, '999,999,999,999') AS TotalRows
    ,pg_size_pretty(pg_relation_size(quote_ident(pt.tablename)::text)) AS TableSize
    ,pg_size_pretty(pg_relation_size(quote_ident(t.indexrelname)::text)) AS IndexSize
    ,to_char(t.idx_scan, '999,999,999,999') AS TotalNumberOfScan
    ,to_char(t.idx_tup_read, '999,999,999,999') AS TotalTupleRead
    ,to_char(t.idx_tup_fetch, '999,999,999,999') AS TotalTupleFetched
FROM pg_tables AS pt
LEFT OUTER JOIN pg_class AS pc
    ON pt.tablename=pc.relname
LEFT OUTER JOIN
(
    SELECT
        pc.relname AS TableName
        ,pc2.relname AS IndexName
        ,psai.idx_scan
        ,psai.idx_tup_read
        ,psai.idx_tup_fetch
        ,psai.indexrelname
    FROM pg_index AS pi
    JOIN pg_class AS pc
        ON pc.oid = pi.indrelid
    JOIN pg_class AS pc2
        ON pc2.oid = pi.indexrelid
    JOIN pg_stat_all_indexes AS psai
        ON pi.indexrelid = psai.indexrelid
)AS T
    ON pt.tablename = T.TableName
WHERE pt.schemaname='public'
ORDER BY 1;
```

Example output
```
+--------------------+-----------------------------------+------------------+------------+--------+-------------------+------------------+-------------------+
| tablename          | indexname                         | totalrows    | tablesize  | indexsize  | totalnumberofscan | totaltupleread   | totaltuplefetched |
|--------------------+-----------------------------------+------------------+------------+--------+-------------------+------------------+-------------------|
| account            | account_username_key              | 1            | 8192 bytes | 16 kB      |               16  |               12 |               12  |
| account            | account_account_uuid_idx          | 1            | 8192 bytes | 16 kB      |                0  |                0 |                0  |
| account            | account_account_uuid_key          | 1            | 8192 bytes | 16 kB      |                0  |                0 |                0  |
| account            | account_pkey                      | 1            | 8192 bytes | 16 kB      |               19  |               19 |               19  |
| event              | event_website_id_idx              | 0            | 0 bytes    | 8192 bytes |                2  |                0 |                0  |
| event              | event_event_uuid_key              | 0            | 0 bytes    | 8192 bytes |                0  |                0 |                0  |
| event              | event_event_uuid_idx              | 0            | 0 bytes    | 8192 bytes |                0  |                0 |                0  |
| event              | event_pkey                        | 0            | 0 bytes    | 8192 bytes |                0  |                0 |                0  |
| event              | event_created_at_idx              | 0            | 0 bytes    | 8192 bytes |                0  |                0 |                0  |
| event              | event_session_id_idx              | 0            | 0 bytes    | 8192 bytes |                0  |                0 |                0  |
| event_data         | event_data_event_id_key           | 0            | 0 bytes    | 8192 bytes |                0  |                0 |                0  |
| event_data         | event_data_pkey                   | 0            | 0 bytes    | 8192 bytes |                0  |                0 |                0  |
| pageview           | pageview_website_id_created_at_idx| 2,372        | 240 kB     | 96 kB      |              929  |            7,703 |            7,394  |
| pageview           | pageview_session_id_idx           | 2,372        | 240 kB     | 72 kB      |              649  |              649 |              649  |
| pageview           | pageview_website_id_idx           | 2,372        | 240 kB     | 72 kB      |              161  |            8,966 |            3,103  |
| pageview           | pageview_created_at_idx           | 2,372        | 240 kB     | 72 kB      |            6,860  |          138,794 |          138,794  |
| pageview           | pageview_pkey                     | 2,372        | 240 kB     | 72 kB      |            7,998  |            7,998 |            7,998  |
| session            | session_website_id_idx            | 962          | 128 kB     | 48 kB      |              371  |              541 |              541  |
| session            | session_created_at_idx            | 962          | 128 kB     | 40 kB      |              291  |              169 |              169  |
| session            | session_session_uuid_key          | 962          | 128 kB     | 56 kB      |            1,855  |            1,107 |            1,107  |
| session            | session_pkey                      | 962          | 128 kB     | 40 kB      |           27,484  |           27,484 |           27,484  |
| session            | session_session_uuid_idx          | 962          | 128 kB     | 48 kB      |              102  |               66 |               66  |
| website            | website_user_id_idx               | 2            | 8192 bytes | 16 kB      |              224  |              368 |              367  |
| website            | website_share_id_key              | 2            | 8192 bytes | 16 kB      |                1  |                1 |                1  |
| website            | website_website_uuid_key          | 2            | 8192 bytes | 16 kB      |            2,350  |            2,351 |            2,350  |
| website            | website_pkey                      | 2            | 8192 bytes | 16 kB      |           11,817  |           11,806 |           11,804  |
| website            | website_website_uuid_idx          | 2            | 8192 bytes | 16 kB      |                0  |                0 |                0  |
+--------------------+-----------------------------------+------------------+------------+--------+-------------------+------------------+-------------------+
```

##### Connection Info

- List all the sessions/connections.

```sql
SELECT pid AS process_id,
       usename AS username,
       datname AS database_name,
       client_addr AS client_address,
       application_name,
       backend_start,
       state,
       state_change
FROM pg_stat_activity;
```

Example output
```
+------------+----------+---------------+----------------+------------------+-------------------------------+--------+-------------------------------+
| process_id | username | database_name | client_address | application_name | backend_start                 | state  | state_change                  |
|------------+----------+---------------+----------------+------------------+-------------------------------+--------+-------------------------------|
| 26         | umami2   | <null>        | <null>         |                  | 2022-11-09 03:56:47.386442+00 | <null> | <null>                        |
| 24         | <null>   | <null>        | <null>         |                  | 2022-11-09 03:56:47.387001+00 | <null> | <null>                        |
| 56         | umami2   | umami         | 172.30.0.1     | pgcli            | 2022-11-09 04:07:52.223156+00 | active | 2022-11-09 05:01:07.323815+00 |
| 157        | umami2   | umami         | 172.30.0.3     |                  | 2022-11-09 04:56:53.558934+00 | idle   | 2022-11-09 05:00:24.510246+00 |
| 22         | <null>   | <null>        | <null>         |                  | 2022-11-09 03:56:47.390823+00 | <null> | <null>                        |
| 21         | <null>   | <null>        | <null>         |                  | 2022-11-09 03:56:47.397267+00 | <null> | <null>                        |
| 23         | <null>   | <null>        | <null>         |                  | 2022-11-09 03:56:47.390123+00 | <null> | <null>                        |
+------------+----------+---------------+----------------+------------------+-------------------------------+--------+-------------------------------+
```

- Killing a connection

We can use a `pg_terminate_backend` function from [Sys Admin Function](https://www.postgresql.org/docs/current/functions-admin.html) list.
```sql
-- kill a connection
SELECT pg_terminate_backend(pid) FROM PG_STAT_ACTIVITY WHERE pid = '3157014';
```
