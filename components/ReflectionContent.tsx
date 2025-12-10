import React from 'react';
import { SectionHeading } from './UI';

export const ReflectionContent: React.FC = () => {
  return (
    <article className="prose prose-lg prose-stone max-w-none font-serif leading-loose text-slate-800 bg-stone-100 p-8 rounded-xl border border-stone-200">
      <div className="not-prose border-l-4 border-indigo-500 pl-6 mb-10">
        <h1 className="text-3xl font-bold font-sans text-slate-900 mb-2">
          Reflection: Defining Purpose in a Multimodal Context
        </h1>
        <p className="text-slate-500 italic">Analysis of the writing process and design choices.</p>
      </div>

      <SectionHeading>Developing the Question</SectionHeading>
      <p>
        My journey with this project began with a broad frustration about how technology affects our daily lives. Initially, I wanted to look at "smartphone addiction" in general. However, during the "Exploring Your Interests" activity, I realized that "addiction" was too vague. I narrowed my scope after reading the Exploring Your Interests worksheet prompts, which encouraged me to look for "tensions." This led me to the specific concept of <strong>algorithmic curation</strong>. I realized the problem wasn't just the device, but the code determining what we see. Finding the Rutgers-specific research from the Hamilton Lab was a turning point; it allowed me to pivot my question from a generic "Is social media bad?" to a more nuanced "How does the algorithm impact Rutgers students specifically, and what can the university do?"     
     </p>

      <SectionHeading>Purpose and Audience</SectionHeading>
      <p>
        My primary audience is the Rutgers University student body, or the digital natives who are constantly online but rarely stop to analyze the medium they live in. My purpose is to move the conversation from "abstinence" (banning phones) to "literacy" (understanding phones). I chose a tone that is accessible yet authoritative, similar to a digital feature in <em>The Atlantic</em> or <em>Vox</em>.
      </p>

      <SectionHeading>Multimodal Choices: Why a Website?</SectionHeading>
      <p>
        I chose to build a <strong>Website</strong> because it is the most native format for my topic. Since I am discussing digital addiction and scrolling behavior, it made sense to present the information in a scrolling, digital format.      
        </p>
      <ol className="list-decimal pl-5 space-y-4">
        <li>
          <strong>Spatial Mode:</strong> Inspired by the Ed Yong article we looked at in class ("Our Blinding, Blaring World"), I wanted to control the reader's pace. A website allows me to use "scrollytelling," where the reader reveals information gradually. I used navigation menus to separate the "Problem" (The Mechanism) from the "Solution" (Rutgers Research), helping the reader mentally organize the argument.        
          </li>
        <li>
          <strong>Visual Mode:</strong> Websites allow for high-quality integration of images. I embedded the "Dopamine Loop" diagram directly next to the text explaining it, which helps readers visualize the abstract concept of an algorithm.        
          </li>
        <li>
          <strong>Linguistic Mode:</strong> Writing for the web requires short paragraphs and clear headings (like "The Comparison Trap") to keep the reader engaged. This format mirrors the way students actually consume information, making my argument more effective than a traditional static essay would be.        
          </li>
      </ol>
      <SectionHeading>Final Thoughts</SectionHeading>
      <p>
        By combining these modes, I was able to create a composition that is not just an essay, but a persuasive artifact designed to change campus culture.
      </p>
    </article>
  );
};
