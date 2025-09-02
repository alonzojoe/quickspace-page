

import Logo from "../assets/images/logo.png"
import Hero from "../assets/images/hero.png"
import Brand1 from "../assets/images/brand1.png"
import Brand2 from "../assets/images/brand2.png"
import Brand3 from "../assets/images/brand3.png"
import Brand4 from "../assets/images/brand4.png"

import Icon1 from "../assets/images/icon1.png"
import Icon2 from "../assets/images/icon2.png"
import Icon3 from "../assets/images/icon3.png"

import ImageRight from "../assets/images/security.png"
import imgLeft from "../assets/images/analytics.png"

import Ic1 from "../assets/images/ic1.png"
import Ic2 from "../assets/images/ic2.png"
import Ic3 from "../assets/images/ic3.png"
import Ic4 from "../assets/images/ic4.png"

import globaImg from "../assets/images/globe.png"

import dashboardImg from "../assets/images/dashboard.png"

import User1 from "../assets/images/user1.png"
import User2 from "../assets/images/user2.png"
import User3 from "../assets/images/user3.png"

export const HERO_CONTENT = {
    title: 'Smart-Thinking & Innovative Solution.',
    subTitlte: 'Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.',
    button1: 'Discover More',
    button2: 'Explore Service',
    items: [
        'Get 15 days free trial',
        'No credit card is required',
        'Cancel anytime'
    ],
    heroImg: Hero
}

export const BRAND_ITEMS = [Brand1, Brand2, Brand3, Brand4]

export const FEATURE_CONTENT = {
    title: 'How To Grow Your Business',
    subTitle: 'Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.',
    featureItems: [
        { id: 1, icon: Icon1, title: 'Active User Analytics', description: 'Class aptent taciti sociosqu litora torquen conubia nostram.' },
        { id: 2, icon: Icon2, title: 'Smart Coding Development', description: 'Morbi eget aliquet finibus, best condimentum aliquet quam.' },
        { id: 3, icon: Icon3, title: 'User Friendly Interface', description: 'Quisque magna, sollicitudin vitae, lobortis feugiat arcu.' },
    ],
    footer: {
        first: 'Approx',
        highlight: '875+',
        second: 'team members ready to online support for you'
    }
}

export const SECURITY_CONTENT = {
    ImageRight,
    title: 'Better Security To Better Protection An Experience Of Strength.',
    description: 'Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.',
    items: [
        { title: 'Well Organised User Interface', description: 'Etiam id euismod odio. Ut euismod sem a lacus fringilla.' },
        { title: 'Completely Bug Free', description: 'Cras eleifend leo ac varius tristique suspendisse.' },
    ]
}


export const PERFORMANCE_CONTENT = {
    imageLeft: imgLeft,
    title: 'Performance Is The Key To Most People Achieving A Better Future',
    description: 'Etiam euismod odio euismod lacus fringilla hendrer.',
    items: [
        { title: 'Custom Edit Tool Application', subTitle: 'Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.' },
        {
            title: 'Built In Safty Chat Mode Enabled', subTitle: 'Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.'
        },
        {
            title: 'Foster Trust Builds System Always Open', subTitle: 'Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.'
        },
        { title: 'Create Auto Layouts In App Interface', subTitle: 'Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.' },
    ]
}

export const CHOOSE_APPLICATION_CONTENT = {
    title: 'Why Will You Choose Our Application',
    subTitle: 'Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.',
    items: [
        { icon: Ic1, title: 'Creative Ideas', description: 'Class aptent taciti sociq u litora torquen conub.' },
        { icon: Ic2, title: 'Awesome Design', description: 'Integer a elit pellentesqu e semper sem ultricies.' },
        { icon: Ic3, title: 'Best Features', description: 'Fusce risus lorem pulvin ar eu posuere vitae.' },
        { icon: Ic4, title: 'Easy Solutions', description: 'Aenean eget nulla eu dui malesuad convallis vel.' },
    ]
}


export const APPREADY_CONTENT = {
    title: 'Ready To Use Our App With No Hidden Malware',
    description: 'Etiam euismod volutpat lacus fringilla henr. Mauris lobortis purus velit quis. Nunc mollis venenatis metus nec aliquet.',
    emailPlaceHolder: 'Enter your email address',
    alreadyMember: 'Already a member? Sign In',
    imageRight: globaImg
}

export const BUSINESS_CONTENT = {
    title: 'We Help To GrowYour Business',
    subTitle: 'Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis augue dolor mollis suscipit erat libero fermentum.',
    items: [
        { title: '142', description: 'Features' },
        { title: '488K', description: 'APP Download' },
        { title: '53M', description: 'Active Users' },
        { title: '90%', description: 'Positive Rate' },
    ]
}

export const DASHBOARD_IMG = dashboardImg

export const TESTIMONIALS_CONTENT = {
    title: 'What People Say',
    subTitle: 'Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis augue mollis suscipit.',
    users: [
        {
            icon: User1,
            testimonial: '“I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented.”',
            name: 'Jenny Wilson',
            role: 'Project Manager at Microsoft'
        },
        {
            icon: User2,
            testimonial: '“I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content”',
            name: 'Robert Fox',
            role: 'Founder at Brain.co'
        },
        {
            icon: User3,
            testimonial: '“Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.”',
            name: 'Kristin Watson',
            role: 'UX Designer at Google'
        },
    ]
}

export const FOOTER_CONTENT = {
    logo: Logo,
    description: 'Phasellus pulvinar porta turpis sit amet facilis sapien bibendum eu praesent massa.',
    phone: '(888) 1234-5678',
    email: 'support-quickspace@quickspace.com',
    sections: [
        { items: ['Useful Links', 'Features', 'About', 'Service', 'Team'] },
        { items: ['Help & Support', 'FAQ', 'Blog', 'Contact Us', 'Support'] },
        { items: ['Resources', 'Guides and resources', 'Team', 'Tools', 'Support'] },
    ],
    reserved: '© All Right Reserved',

}