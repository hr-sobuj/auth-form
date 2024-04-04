import { IoMdContact } from "react-icons/io";
import { MdOutlineBusinessCenter } from "react-icons/md";

interface Account {
    icon: any;
    type: string;
    description: string;
    btn: {
        label: string;
        url: string;
    };
}

interface Data {
    accountType: {
        title: string;
        accounts: Account[];
    };
}

const data = {} as Data;

data.accountType = {
    title: 'Choose account type',
    accounts: [
        {
            icon: IoMdContact,
            type: 'Individual',
            description: 'For personal use.',
            btn: {
                label: 'Sign up',
                url: '/personal-sign-up'
            }
        },
        {
            icon: MdOutlineBusinessCenter,
            type: 'Business',
            description: 'For Business use.',
            btn: {
                label: 'Sign up',
                url: '/business-sign-up'
            }
        }
    ]
};

export default data;
