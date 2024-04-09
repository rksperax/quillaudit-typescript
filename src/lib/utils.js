import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const navItems = [
  {
    id: 1,
    label: 'AI Audit',
    url: '/',
  },
  {
    id: 2,
    label: 'Manual Audit',
    url: '/manual-audit'
  },
  {
    id: 3,
    label: 'RedTeam',
    url: '/red-team'
  },
  {
    id: 4,
    label: 'Monitor',
    url: '/monitor'
  },
  {
    id: 5,
    label: 'Incident Response',
    url: '/incident-response'
  },
]

export function cn(...args) {
  return twMerge(clsx(args))
}

const jsCode = `var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
  console.log("Hello, " + line);
}); `

const htmlCode = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique.</h1>
</body>

</html>`

export const navBreadcrumb = [
  {
    id: 1,
    label: 'AI Audit',
    url: '/'
  },
  {
    id: 2,
    label: 'My Projects',
    url: '/my-projects'
  },
  {
    id: 1,
    label: 'Code Editor',
  }
]

export const explorer = {
  id: "1",
  name: "Example Folder",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "Sample Folder",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "Folder",
          isFolder: true,
          items: []
        },
        {
          id: "4",
          name: "Folder 123",
          isFolder: true,
          items: []
        },
        {
          id: "5",
          name: 'Example-File-1.js',
          isFolder: false,
          items: [],
          code: jsCode,
        },
        {
          id: "6",
          name: 'Example-File-2.html',
          isFolder: false,
          code: htmlCode,
          items: []
        },
        {
          id: "7",
          name: 'Example-File-321.css',
          isFolder: false,
          code: '.html {background: red}',
          items: []
        }
      ]
    },
    {
      id: "8",
      name: "Sample Folder",
      isFolder: true,
      items: []
    },
    {
      id: "9",
      name: "Folder 123",
      isFolder: true,
      items: []
    },
    {
      id: "10",
      name: "Example file 2",
      isFolder: false,
      items: []
    },
    {
      id: "11",
      name: "Example file 321",
      isFolder: false,
      items: []
    }
  ]
}

export const issuesData = [
  {
    id: 1,
    total: 446,
    title: 'total issues found',
    color: 'blue',
    list_of_issues: [
      {
        id: 1,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 2,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 3,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 4,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
    ]
  },
  {
    id: 2,
    total: 108,
    title: 'high severity issues',
    color: 'red',
    list_of_issues: [
      {
        id: 1,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 2,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 3,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 4,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
    ]
  },
  {
    id: 3,
    total: 143,
    title: 'medium severity issues',
    color: 'yellow',
    list_of_issues: [
      {
        id: 1,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 2,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 3,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 4,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
    ]
  },
  {
    id: 4,
    total: 0,
    title: 'low severity issues',
    color: 'green',
    list_of_issues: [
      {
        id: 1,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 2,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 3,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 4,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
    ]
  },
  {
    id: 5,
    total: 68,
    title: 'informational issues',
    color: 'purple',
    list_of_issues: [
      {
        id: 1,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 2,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 3,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 4,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
    ]
  },
  {
    id: 6,
    total: 127,
    title: 'optimisation issues',
    color: 'sky',
    list_of_issues: [
      {
        id: 1,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 2,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 3,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
      {
        id: 4,
        issue_title: 'Lorem ipsum dolor sit ame',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod, distinctio nihil odit sequi aspernatur ad aliquid nostrum repellat voluptatibus voluptate quaerat quia deleniti a eveniet ipsam natus, laboriosam esse commodi cupiditate, vitae ut. A laudantium saepe atque reiciendis repellendus.',
        remediation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas, provident doloribus totam quidem corporis nisi accusamus optio voluptate eveniet, eaque laborum, minus possimus fuga molestias iusto? Voluptatum, temporibus natus!'
      },
    ]
  },
]