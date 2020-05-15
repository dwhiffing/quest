---
title: 'Quest'
template: blocks
blocks:
  - template: block__hero
    component: hero
    background: 'transparent'
    title: Join a quest that will change our world forever
  - template: block__feature
    component: feature
    image: '/src/images/note.png'
    background: primary
    orientation: normal
    title: Join the quest
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at vehicula lectus, quis ullamcorper augue. Curabitur vel sapien pharetra, fermentum elit ut, condimentum est.
  - template: block__feature
    component: feature
    background: light
    orientation: reverse
    title: Our Impact
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at vehicula lectus, quis ullamcorper augue. Curabitur vel sapien pharetra, fermentum elit ut, condimentum est.
    image: '/src/images/sword.png'
  - template: block__feature
    component: feature
    background: dark
    orientation: normal
    title: Get Involved
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at vehicula lectus, quis ullamcorper augue. Curabitur vel sapien pharetra, fermentum elit ut, condimentum est.
  - template: block__3col
    component: 3col
    title: Why Forestry?
    col1:
      title: Content Lives in Git
      content:
        Content updates are saved to your git repo, so they can by synchronized
        across all environments
    col2:
      title: Customizable CMS
      content: Forestry easily adapts to your content structure, not the other way around.
    col3:
      title: Blocks Page Builder
      content:
        Use blocks to give editors the power to build dynamic pages - like this
        one!
  - template: block__cta
    component: cta
    background: primary
    title: Create Your Own Gatsby Site
    subtitle: Use our quick start to import this demo into Forestry
    button:
      url: https://app.forestry.io/quick-start?repo=forestryio/gatsby-starter-forestry&branch=master&engine=gatsby
      text: Get Started
---
