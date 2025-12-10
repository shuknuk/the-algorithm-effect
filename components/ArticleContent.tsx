import React from 'react';
import { SectionHeading, PullQuote, Figure, Separator } from './UI';

export const ArticleContent: React.FC = () => {
  return (
    <article className="prose prose-lg prose-stone max-w-none font-serif leading-loose text-slate-800">
      {/* Header Info */}
      <div className="not-prose mb-10 border-b pb-8 border-stone-300">
        <h1 className="text-4xl md:text-6xl font-bold font-sans text-rutgers-dark mb-4 leading-tight">
          The Algorithm Effect: Regaining Control on the Digital Campus
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between font-sans text-stone-600 text-sm md:text-base mt-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-rutgers-red uppercase tracking-wider">College Writing</span>
            <span className="text-stone-400">•</span>
            <span>Fall 2025</span>
          </div>
          <div className="mt-2 md:mt-0 italic">
            By Kinshuk Goel
          </div>
        </div>
      </div>

      {/* Introduction */}
      <SectionHeading>Introduction: The Silent Crisis on College Ave</SectionHeading>
      <p>
        If you take a walk down College Ave on a Tuesday afternoon, or sit in the Rutgers Student Center for just five minutes, you will witness a phenomenon that has become so common it is almost invisible. Hundreds of students are physically present, yet mentally absent. They are waiting for buses, sitting in dining halls, or walking between classes, but their gaze is locked downwards, illuminated by the soft blue glow of a smartphone screen. We often dismiss this behavior as modern boredom or a generational quirk, but it represents a profound shift in the infrastructure of college life. Social media is no longer just a pastime or a way to kill time between lectures; it has become the primary "public square" for the student body. It is how we find out about parties, how we keep up with friends from home, and how we prove to the world that we are thriving.
      </p>
      <p>
        However, we must remember that these digital public squares are not neutral spaces. They are owned by massive, for-profit corporations whose primary objective is not student well-being, but "engagement." The longer a student stares at the screen, the more profitable they are. To achieve this, these platforms employ sophisticated algorithms designed to manipulate human psychology. This project investigates a critical question: <strong>How does algorithmic curation directly impact the mental health of Rutgers students, and are we truly in control of our social lives?</strong> By analyzing the mechanisms of digital addiction, the psychology of comparison, and the specific data coming out of Rutgers research labs, we can see that the mental health crisis on campus is being exacerbated by the very tools we use to connect.
      </p>

      <Separator />

      {/* The Mechanism */}
      <SectionHeading>The Mechanism: Engineering Addiction</SectionHeading>
      <p>
        To understand why students feel anxious and tethered to their devices, we must first understand the tool itself. We are not fighting a fair fight; we are fighting a supercomputer designed to hack our dopamine pathways. According to research by Alutaybi et al., social media platforms utilize reinforcement learning algorithms that are "designed to find and recommend information that fits perfectly to users' interests and habits" (Alutaybi). This is not random. The algorithm tracks every pause, every click, and every share to build a psychological profile of the user.
      </p>

      <Figure 
        src="/images/slideShow.png" 
        alt="Diagram of the Dopamine Loop showing stimulus, action, and reward."
        caption="Fig. 1: The cyclical nature of algorithmic dependency."
      />

      <p>
        This creates a "dependency loop" in the brain that functions similarly to substance addiction. When a student opens TikTok or Instagram, they are essentially pulling the lever on a slot machine. Sometimes they see something boring, but sometimes they see something that dopamine, a funny video, a compliment, or shocking news. This "vtriggers a hit of ariable reward schedule" is the most addictive pattern known in psychology. Alutaybi’s research confirms that this usage correlates directly with higher rates of depression and anxiety among college-aged adults. The algorithm is not designed to make you happy; it is designed to keep you scrolling. As a result, Rutgers students often find themselves trapped in a cycle of consumption that they did not consciously choose, losing hours of sleep and study time to a feed that never ends.
      </p>

      {/* The Comparison Trap */}
      <SectionHeading>The Comparison Trap: The "Highlight Reel" Effect</SectionHeading>
      <p>
        While the addiction mechanism keeps students online, the <em>content</em> they see does the psychological damage. The most pervasive issue is the amplification of "Social Comparison Theory." Humans have a natural, evolutionary drive to evaluate their own social standing by comparing themselves to others. In a pre-digital era, a student might compare themselves to the 30 people in their classroom. Today, the algorithm forces them to compare themselves to the top 1% of the entire world.
      </p>
      <p>
        Erin Vogel’s foundational study on social media and self-esteem highlights that students who frequently use these platforms for social comparison experience significantly lower self-esteem (Vogel 206). The danger lies in the disconnect between reality and curation. A Rutgers student sitting in their dorm room, stressed about an exam and surrounded by laundry, opens their phone and sees a curated stream of their peers at parties, on vacations, or celebrating internships. They are comparing their "behind-the-scenes" struggle with everyone else’s "highlight reel."
      </p>

      <PullQuote>
        "The algorithm prioritizes content that receives high engagement, which is almost always the most polished, edited, and unrealistic version of reality."
      </PullQuote>

      <p>
        Because the algorithm prioritizes content that receives high engagement, it pushes these unrealistic images to the top of the feed, filtering out the mundane or struggling moments. This creates a distorted reality where everyone else appears to be happy and successful, leaving the viewer feeling isolated and inadequate. This "curated loneliness" is a key driver of the mental health crisis on campus, as students feel they are failing to live up to a standard that doesn't actually exist.
      </p>

      {/* The Academic Cost */}
      <SectionHeading>The Academic Cost: FOMO and Cognitive Load</SectionHeading>
      <p>
        The impact of these algorithms extends beyond emotional well-being and strikes at the core of the university’s mission: academics. Recent research by Sharma et al. (2025) draws a direct line between social anxiety and academic performance, mediated by the "Fear Of Missing Out" (FOMO). FOMO is not just a slang term; it is a state of psychological arousal where the brain is constantly scanning for threats to social belonging.
      </p>
      <p>
        The algorithm exploits this by sending push notifications and creating "urgent" content (like 24-hour stories) that disappears if not viewed immediately. Sharma explains that this drives a compulsion to check the phone constantly, even during lectures or study sessions. This behavior leads to "fragmented attention." Every time a student switches their focus from a textbook to a notification, their brain creates a "cognitive load." It takes time to refocus on the complex material. When this happens every five minutes, deep learning becomes impossible. The result is a vicious cycle: anxiety leads to phone checking, phone checking leads to poor study habits, poor study habits lead to bad grades, and bad grades lead to even more anxiety.
      </p>

      <Separator />

      {/* A Rutgers Reality Check */}
      <SectionHeading>A Rutgers Reality Check: It’s Not Just "Screen Time"</SectionHeading>
      <p>
        However, the narrative is not as simple as "phones are evil." If we want to solve this problem, we must look at the nuance. Groundbreaking research conducted right here at the Rutgers University Hamilton Lab challenges the common wisdom that "screen time" is the villain. In a 2024 study, Jessica Hamilton and her team found that the total amount of time an adolescent spends online is actually a <em>poor</em> predictor of suicide risk (Hamilton).
      </p>

      <Figure 
        src="/images/graphChart.png" 
        alt="Graph showing Positive vs. Negative interactions impacting mental health."
        caption="Fig. 2. Theoretical model illustrating the relationship between social media use, FOMO, and psychological well-being tracked across four distinct time points (T1–T4) to establish causality (Zhang et al.)."
      />

      <p>
        Instead, the study found that the <em>quality</em> of the experience was the deciding factor. Negative experiences, such as cyberbullying, exclusion, or "doomscrolling" through depressing news—drastically increased risk. However, positive interactions, such as messaging close friends, finding support groups, or engaging with hobbies, actually served as a <strong>protective factor</strong>. This is a crucial distinction. It means that the university’s strategy cannot simply be "digital abstinence." Telling students to just "get off their phones" ignores the reality that these devices are also their lifeline to community. The goal should not be to eliminate screen time, but to improve the <em>quality</em> of that time.
      </p>

      {/* Future Directions */}
      <SectionHeading>Future Directions: Moving from Passive to Active</SectionHeading>
      <p>
        So, how do we regain control? The solution lies in shifting students from being "Passive Consumers" (who let the algorithm control them) to "Active Users" (who use the tool with intention). Based on the evidence, Rutgers University has a unique opportunity to lead in "Digital Wellness" through two main strategies.
      </p>
      <p>
        First, we must embrace <strong>Algorithm Literacy</strong>. Just as we require students to take courses on alcohol safety and sexual health during orientation, we should incorporate a "Digital Hygiene" module into the first-year seminar. Students need to be taught exactly how the algorithm works. If they understand that the "For You" page is a manipulated feed designed to trigger dopamine, the psychological "magic" wears off. They can learn to curate their own feeds, unfollowing accounts that trigger comparison and prioritizing accounts that inspire them.
      </p>
      <p>
        Second, the university should use technology to fight technology. A meta-analysis by Lattie et al. (2022) found that "e-mental health" interventions are highly effective for university students. Rutgers should integrate evidence-based wellness apps, those offering cognitive behavioral therapy (CBT) and mindfulness, directly into the Student Health Portal. These tools meet students where they are: on their phones. They offer a private, stigma-free way to manage anxiety at 2:00 AM when the counseling center is closed.
      </p>

      {/* Conclusion */}
      <SectionHeading>Conclusion</SectionHeading>
      <p>
        Social media is not going away. The algorithms that power our feeds are becoming more advanced every day. We cannot simply ignore them, nor can we pretend that "unplugging" is a realistic, long-term solution for a generation that has grown up online. However, we are not powerless. By recognizing the mechanisms of addiction, understanding the comparison trap, and listening to the nuanced data from our own researchers, we can change our relationship with these tools. Rutgers has the potential to build a campus culture that values connection over engagement. It starts with a simple choice: looking up from the screen and realizing that the imperfect, messy reality of the student next to you is far more valuable than the perfect, curated lie in your pocket.
      </p>
    </article>
  );
};
