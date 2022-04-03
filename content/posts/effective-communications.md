---
title: "Effective Communications"
date: 2022-04-02T14:38:28+08:00
description: The remote work environment is different from the office, face-to-face environment. Different environments require different communication systems. This guide tries to set the expectations and provides some guidelines on how we can do better as an individual.
draft: false
---

This is the public version of an internal doc that I and my colleagues (especially Jit Corn, Jack & Co. Thank you guys.) prepared for the rest of the engineering team.
All the points here are from the great articles/videos we have seen and our own experience/expecations working remote due to COVID.
This guide tries to set the expectations and provides some guidelines.

---

The remote work environment is different from the office, face-to-face environment. Different environments need different communication systems.

## Over-Communicate

#### Why should we over-communicate?

Working remotely means that spontaneous and informal check-ins are not possible; We can't walk over to each other's desks to see how we are doing. We need to be more deliberate in how we communicate to compensate for this lack of spontaneity.

#### How do we over-communicate?

- **Post updates** about what you are working on or your availability. Communicate if you are out/have commitments
    - If you are out for the day or have some errands to do, put your absence message in
        - Your respective team's Slack channel
    - Update your calendar event.
    - Update your own Slack status to reflect the time you're out
    - **There are tools to automate this process**
        - Use something like https://reclaim.ai/ or https://www.getclockwise.com/ to automatically update your Slack status to let people know whether you are having lunch or in a meeting or doing something.
    - Put the event in the team google calendar to state that you are out for the day. If you connect Google Calendar to Slack, it will automatically update the Slack status.
- **If you need something by a specific time, include it in the message.**
    - Always try to remember these points when you ask someone for something:
        - Context/Background: this can means what PR, which line of code, which features & related Product requirements document
(PRD) + Design, which slack thread
        - Priority: how important is this for you & your team
        - Purpose: what you try to achieve
        - Deadline: when do you expect them to get back to you
- **Plan ahead of time.** Don't ask at the last minute.
    - E.g I need to release this feature X in 2 days and would love your review.
- **Set an agenda or a thread.** Before every meeting, share all the relevant information and list down key issues. So that everyone can come up with a full understanding of the topic at hand.
- **Document the decisions** from the meeting by either starting or continuing in a Slack thread or in a document. So that people who weren't there can find that information.
- We also understand that people need a "maker schedule" so **set a block of time** every day and focus.
    - Allocate at least 4 hours of uninterrupted maker time once you decide to make it your maker day. Respect other people maker's schedule as well.

## Prefer Asynchronous Communication
Asynchronous communication is when you send a message without expecting an immediate response. Synchronous communication is when you send a message and the recipient processes the information and responds immediately. There are times and places for both types of communication.

### When to do which one?

| Synchronous Communication | Asynchronous Communication |
| ------------------------- | -------------------------- |
| 1-on-1 meetings / Performance Reviews / 360 Reviews |  Asking the questions that don't need the answers immediately |
| Team retreats/fun activities | Communicating some information to the rest of the team so that they are aware of the changes |
| Onboarding a new member   | Requesting access to some resources |
| A lot of unknowns to discuss/brainstorm | Progress of the tasks you are doing |
| A P0/P1 issue (things are on fire 🔥) | Company announcements |

### How to do which one?
| Synchronous Communication | Asynchronous Communication |
| ------------------------- | -------------------------- |
| Hangout Calls |  Emails |
| [Slack Huddle](https://slack.com/help/articles/4402059015315-Use-huddles-in-Slack)/Google Meet/Zoom | Slack threads |
| Phone calls | |

#### A suggestion to speed up the communication

For some of the work we do day to day such as
- Detailed feature implementation discussion
- Why does the XYZ feature not work during the integration and we want to resolve it

Things you can do
- Set a short session where everyone involved is available.
- Do an audio or video call so that context can be provided much faster than through back and forth text-based chat.
Use Google Meet or Slack Huddle.
- That's because there are always missing steps, and you might not identify them when you're writing them down.

## Ask good questions

There is no such thing as a stupid question but there is such thing as a clumsy and unproductive question.
When you are asking a question

- Don't be vague.
- Do not assume the person knows what you are trying to ask. Provide some clarifying context. Re-read the question, trying to identify the places where you made assumptions to preempt any questions that someone might have.
- Provide what you tried, what you know
- Include links, docs, and other references so no one has to go search things on their own for this information. You can also be sure that they are looking at the same thing as you are.
- Do not accept answers that don't address your questions.
- Always craft a full message on Slack with all the contexts. Don't open a thread and leave it there until people come in to ask for clarification questions

If you are unsure of how to frame a question, you can try the following template:
```
Context:
Describe the situation.
What are we trying to do?
What documents have you referenced?
What have you discovered when investigating?
What are the solutions you have tried?

Question:
What is your question given the above context?
```

## Craft good answers

- Do not act surprised or have prejudice
    - If someone asks what is "bash", don't reply like "you don't know what is bash??" or "how could you not know what is bash". That is not helpful. No one knows everything. Be empathetic.
- If the question is not clear, help the person clarify
    - Rephrase a more specific question back at them
        - Say something like, "What I'm hearing from you is `<rephrase the question>`? Did I understand you correctly?"
    - Ask them for more specific information they didn't provide
    - Ask what prompted their question.
- Figure out what they know already
- Point them to the existing documentation
- If the documentation does not exist, log it down in the backlog as a documentation task
- Point them to the existing code/service
- If you helped them solve the issue, explain to them what you did so that they can figure it out by themselves next time.
- Conclude with "Did I answer/solve the problem?"


## Default to public channels conversation
- Ask questions in public channels. Don't be afraid to look stupid as long as you have tried to provide enough info/context for your question.
- Asking in a public channel means that more people can jump in and help you.
- Other people may have the same questions as well, so sharing in a public channel reduces the need to communicate twice.
- In the heat of the moment, it is possible that the emotions get the best out of us.
    - Pause for a moment and try to assume good intentions as your initial thought.
    - Do not be afraid to challenge/clarify the status quo.
    - Do not blame/throw shade at each other. Blame does not work and does not lead to a resolution.

## Dealing with different time zones
- Keep in mind the timezones
    - e.g Our diverse team members are from New Delhi, Jakarta and Bangkok so somethig like this is useful for us. https://www.worldtimebuddy.com/?pl=1&lid=1880252,1261481,1642911,1609350&h=1880252&hf=1
![Timezones](/timezones.png)
- Set working hours
- Respect other people working hours
- Prefer asynchronous communication (see above)
- Record the meetings

## Tips for Leaders and Managers

- Encourage your team to over-communicate
- Have regular 1:1 calls with all your reports.
    - The point of these calls is to check in with the person, not the work.
    - On the other hand, respect their time as well. Don't have to force if both of you are busy.
    - Duration and frequency based on preferences of either party and/or a feeling of needing it less.
- Coach, unblock, help the team grow, provide feedback, discuss plans and doubts, etc.
- Work and communicate in public for everything but personal matters.
    - It's super easy to have a habit of DMing people but instead do more discussions in public channels.
- Promote writing and communication as core skills to master
    - Some tips: [Writing Tips for Remote Workers (And Everyone Else)](https://blog.doist.com/writing-tips/)
- Emphasize trust, organization, independence, and accountability
- Make time for the team
- Be more empathetic – recognize emotions in others, and understand other people's perspectives on a situation.

## References
- [How to ask good questions](https://jvns.ca/blog/good-questions/)
- [How to get useful answers to your questions](https://jvns.ca/blog/2021/10/21/how-to-get-useful-answers-to-your-questions/)
- [Asking good questions is hard (but worth it)](https://jvns.ca/blog/2016/08/31/asking-questions/)
- [Written communication is a remote work superpower - Snir David Blog](https://snir.dev/blog/remote-async-communication/)
- [Asynchronous Communication: What It Is & Why It Matters](https://blog.doist.com/asynchronous-communication/)
