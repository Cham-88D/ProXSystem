import {user} from '../auth/validateAuth'

let navigations = []

//dashborad admin paths

if(user()==="Admin")
{
     navigations = [
        {
            name: 'Register Staff',
            path: '/regStaff',
            icon: 'dashboard'
        },
        {
            name: 'View Sites',
            path: '/viewSites',
            icon: 'dashboard'
        },

        {
            name: 'View Staff',
            path: '/viewStaff',
            icon: 'dashboard'
        },

        {
            name: 'View Site Managers',
            icon: 'launch',
            path: '/viewMan',
        },

         {
             name: 'View Suppliers',
             icon: 'launch',
             path: '/viewSup',
         },

         {
             name: 'Manage Orders',
             icon: 'launch',
             path: '/orderHiM',
         },

         {
             name: 'Change Prices',
             icon: 'launch',
             path: '/price',
         },



     ]

}

//dashborad staff paths


if(user()==="Staff")
{
    navigations = [
        {
            name: 'Register Company',
            path: '/regCom',
            icon: 'dashboard'
        },
        {
            name: 'Register Site Manager',
            path: '/regMan',
            icon: 'dashboard'
        },

        {
            name: 'Create Site',
            path: '/createS',
            icon: 'dashboard'
        },

        {
            name: 'Manage Orders ',
            icon: 'launch',
            path: '/orderM',
        },
    ]

}

//dashborad supplier paths

if(user()==="Supplier")
{
    navigations = [
        {
            name: 'Company Details',
            path: '/comp',
            icon: 'dashboard'
        },
        {
            name: 'Process Orders',
            path: '/proOrd',
            icon: 'dashboard'
        },

        {
            name: 'Invoice',
            path: '/invoice',
            icon: 'dashboard'
        },

        {
            name: 'Delivery',
            icon: 'launch',
            path: '/del',
        },
    ]

}



//dashborad site manager

if(user()==="Manager")
{
    navigations = [
        {
            name: 'Add Supply',
            path: '/addSup',
            icon: 'dashboard'
        },
        {
            name: 'view Warehouse',
            path: '/viewWar',
            icon: 'dashboard'
        },

        {
            name: 'Confirm Delivery',
            path: '/confirmD',
            icon: 'dashboard'
        },




    ]

}






export  {navigations}