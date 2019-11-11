import moment from 'moment';
const expenses = [
    {   'id':1,
        'description':'Water bill',
        'note': '',
        'amount': 100,
        'createdAt': 1000
    },
    {   
        'id':2,
        'description':'Gum bill1',
        'amount': 20,
        'note': '',
        'createdAt':5000
    },
    {   
        'id':3,
        'description':'Gum bill2',
        'amount': 40,
        'note': '',
        'createdAt':moment(0).subtract(4,'days').valueOf()
    },
    {   
        'id':4,
        'description':'insurance ',
        'amount': 500000,
        'note': '',
        'createdAt':moment(0).add(10,'days').valueOf()
    }
]

export default expenses;