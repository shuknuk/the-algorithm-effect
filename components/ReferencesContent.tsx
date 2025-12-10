import React from 'react';

export const ReferencesContent: React.FC = () => {
  const citations = [
    {
      text: 'Alutaybi, Abdullah, et al. "The Excessive Use of Social Media Among College Students: The Role of Mindfulness." Open Access Journal of Addiction and Psychology, vol. 3, no. 5, 2020. Iris Publishers,',
      link: 'https://irispublishers.com/oajap/fulltext/the-excessive-use-of-social-media-among-college-students-the-role-of-mindfulness.ID.000624.php'
    },
    {
      text: 'Hamilton, Jessica L. "Screen Time Is a Poor Predictor of Suicide Risk, Rutgers Researchers Find." Rutgers University-New Brunswick News, 12 Dec. 2024,',
      link: 'https://newbrunswick.rutgers.edu/news/screen-time-poor-predictor-suicide-risk-rutger-researchers-find'
    },
    {
      text: 'Lattie, Emily G., et al. "Digital Interventions for Psychological Well-being in University Students: Systematic Review and Meta-analysis." Journal of Medical Internet Research, vol. 24, no. 9, 2022, p. e39686,',
      link: 'https://www.jmir.org/2022/9/e39686/'
    },
    {
      text: 'Sharma, M., et al. "Social Media Use and Academic Performance Among College Students: The Chain Mediating Roles of Social Anxiety and Fear of Missing Out." Frontiers in Psychology, vol. 14, 2025,',
      link: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1649890/full'
    },
    {
      text: 'Vogel, Erin A., et al. "Social Comparison, Social Media, and Self-Esteem." Psychology of Popular Media Culture, vol. 3, no. 4, 2014, pp. 206–222. APA PsycNet,',
      link: 'https://doi.org/10.1037/ppm0000047'
    },
    {
      text: 'Zhang, S., et al. "The Impact of Social Media Use on Psychological Well-Being of College Students: The Chain Mediating Role of Fear of Missing Out and Social Anxiety." Frontiers in Psychology, vol. 15, 2024,',
      link: 'https://doi.org/10.3389/fpsyg.2024.1387983'
    }

  ];

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold font-sans text-slate-900 mb-8 pb-4 border-b border-stone-300">
        Works Cited
      </h2>
      <div className="space-y-6 font-serif text-slate-800">
        {citations.map((cite, index) => (
          <div key={index} className="pl-8 -indent-8 leading-relaxed">
            {cite.text}{" "}
            <a 
              href={cite.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-rutgers-red hover:underline break-words"
            >
              {cite.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
