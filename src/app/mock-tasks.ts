import { Task } from './tasks';
import { User } from './users';
import { Category } from './categories';

export const TASKS: Task[] = [
    { taskId: 1,
      category: 'Backoffice', 
      title: '月末振込',
      user: 'Takahashi',
      memo: '31日までに取引先への振込対応すること。',
      isDone: false,
    },
    { taskId: 2,
        category: 'Marketing', 
        title: '競合調査',
        user: 'Hara',
        memo: '競合各社の広報戦略についての調査。',
        isDone: false,
    },
    { taskId: 3,
        category: 'Marketing', 
        title: 'BaaSinfo KPI',
        user: 'Kubo',
        memo: 'BaaSinfoのKPI設定。',
        isDone: true,
    },
    { taskId: 4,
        category: 'Backoffice', 
        title: '社保調査資料提出',
        user: 'Takahashi',
        memo: '17日までに年金事務所へ調査資料を提出する。',
        isDone: true,
    }
]

export const USERS: User[] = [
    { userId: 1,
      user: 'Takahashi',
    },
    { userId: 2,
      user: 'Hara',
    },
    { userId: 3,
      user: 'Kubo',
    },
]

export const CATEGORIES: Category[] = [
    { categoryId: 1,
      category: 'Backoffice',
    },
    { categoryId: 2,
      category: 'Marketing',
    },
]