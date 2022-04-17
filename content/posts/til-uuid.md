---
title: "Today I learn about UUID"
date: 2022-04-17T12:32:48+08:00
draft: false
description: I was reading up on how the Envoy proxy generates x-request-id and learned that it uses UUID (Universally unique identifier). Then I got curious about UUIDs.
---

I was reading up on how the [Envoy proxy generates](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#config-http-conn-man-headers-x-request-id) `x-request-id` and learned that it uses UUID (Universally unique identifier).
Well, this is not new.
We want the requests to be unique regardless of the clients, and the servers so it makes sense. We also use UUID everywhere these days. The biggest example is the database records' primary key. Most programming languages/web frameworks provide built-in modules/functions to generate these numbers.

But how do they work? What's happening underneath?
It turns out there are **5 different versions** of UUID, starting from UUID1 .. UUID5.

The standardized UUID format has 5 groups, separated by hyphens (`-`) and a total of 36 characters.
![UUID Format](/uuid_format.png)

We can identify the UUID version by looking at the 13th digit of the Hexadecimal UUID string.
There is also a "variant" and the 17th digit represents it.
![UUID Version and Varient](/uuid_version_and_varient.png)

Let's break it down into different versions.

### The different UUID versions

#### UUID 1

It uses the machine [MAC address](https://en.wikipedia.org/wiki/MAC_address) + timestamp. That also means that we can decode the machine and the time that generated this UUID potentially.
Let's see the example by using Python's built-in UUID module.
```bash
$ python3
Python 3.9.7 (default, Sep 10 2021, 14:59:43)
[GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import uuid
>>> print(uuid.uuid1())
5a79c57a-be08-11ec-9b65-195fb6c8908b
>>> print(uuid.uuid1())
b801eccf-be0b-11ec-9b65-195fb6c8908b
>>> print(uuid.uuid1())
b801ecd0-be0b-11ec-9b65-195fb6c8908b
```
Notice that the 13th digit is `1`.

There is a pretty cool online tool called [UUID Decoder](https://www.uuidtools.com/decode).

![UUID Decoder](/uuid_decoder.png)

#### UUID 2

Similiar to UUID 1 but uses something called "DCE security". I have yet to learn more about this. [The spec](https://pubs.opengroup.org/onlinepubs/9696989899/chap5.htm#tagcjh_08_02_01_01). Python `uuid` module doesn't support it.

#### UUID 3 and UUID 5

We generate these versions by using a "namespace" and a unique "name". The namespace and name don't have to be unique. So if we put in the same namespace and name every time, we will get back the same UUID.
The difference between the version 3 and 5 is
- Version 3 uses [MD5 hash](https://en.wikipedia.org/wiki/MD5) of the namespace and the name.
- Version 5 uses [SHA1](https://en.wikipedia.org/wiki/SHA-1) of the namespace and the name.

Examples

Note that we are using a pre-defined namespace called `uuid.NAMESPACE_DNS`.
UUID 3
```
>>> print(uuid.uuid3(uuid.NAMESPACE_DNS, "yelin"))
c297bc73-5df2-3a4e-9f0d-09fb0c6b0ab2
>>> print(uuid.uuid3(uuid.NAMESPACE_DNS, "yelin"))
c297bc73-5df2-3a4e-9f0d-09fb0c6b0ab2
>>> print(uuid.uuid3(uuid.NAMESPACE_DNS, "yelin"))
c297bc73-5df2-3a4e-9f0d-09fb0c6b0ab2
```

UUID 5
```
>>> print(uuid.uuid5(uuid.NAMESPACE_DNS, "yelin"))
5b3be7b2-6bca-5cb3-ad84-2d1b2200d18b
>>> print(uuid.uuid5(uuid.NAMESPACE_DNS, "yelin"))
5b3be7b2-6bca-5cb3-ad84-2d1b2200d18b
>>> print(uuid.uuid5(uuid.NAMESPACE_DNS, "yelin"))
5b3be7b2-6bca-5cb3-ad84-2d1b2200d18b
```

So, if we want to generate reproducible UUIDs from given names, we can use either version 3 and 5.

#### UUID 4

This is this most used UUID version because the UUIDs are **randomly** generated.
We are bound to get a new one every single time.
```
>>> print(uuid.uuid4())
c8530fda-343a-417a-9651-b3d25b59f2ad
>>> print(uuid.uuid4())
c2391315-a354-4d7b-a405-874476857576
>>> print(uuid.uuid4())
3ed24bd0-5d0b-4cbc-9910-2d6199855d8c
```
The 13th digit will always be "4" since this is the UUID version 4.
In most situations, this is what we want.

#### Going back to Envoy

Ok so now we know a bit more about UUIDs. How does it apply to the Envoy context?
Envoy uses UUID4 to generate the `x-request-id`. The request ID is very important for tracing and visualizing the request flows.
By default, Envoy uses [UuidRequestIdConfig](https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/request_id/uuid/v3/uuid.proto#extensions-request-id-uuid-v3-uuidrequestidconfig) to generate the ID.
Envoy uses the 13th digit (the UUID version identifier) to decide whether it should trace this particular request or what to do with it. Based on the configuration, Envoy will swap to either of these.
- `9` - Envoy will sample the tracing
- `a` - Force traced due to server-side override.
- `b` - Force traced due to client-side request ID joining.

If the digit is `4`, it is the default and no trace status for this request.

I have a sample envoy config to test this at [request_id_generation.yaml](https://github.com/yelinaung/envoy-fundamentals-configs/blob/master/request_id_generation.yaml).
