export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601da311016eb74c9900a7a9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-279jkk36',
                  apiId: '31958701-71e8-41ca-889f-7aa67b7086e3'
                },
                {
                  buildHookId: '601da3128bacca3fab3302d6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4cuatxxq',
                  apiId: '44a70e4a-1ad9-4cf5-a9e3-3b48daf8ab4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slim0199/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4cuatxxq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
