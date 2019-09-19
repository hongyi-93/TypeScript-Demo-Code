import { User, RoleType } from '../types';

// javascript
export const add = (a: number, b: number): number =>
a + b;

export const getUserLevel = (user: User): number => {
    switch(user.role) {
        case 'owner':
            return 30;
        case 'admin':
            return 20;
        case 'sharedTrainer':
            return 5;
        case 'trainer':
            return 0;
        case 'client':
            return 99;
    }
}
// export const getUserPhone = (user: User): String => user.phone;