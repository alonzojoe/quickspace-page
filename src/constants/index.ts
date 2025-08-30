


import Hero from "../assets/images/hero.png"
import Brand1 from "../assets/images/brand1.png"
import Brand2 from "../assets/images/brand2.png"
import Brand3 from "../assets/images/brand3.png"
import Brand4 from "../assets/images/brand4.png"

import Icon1 from "../assets/images/icon1.png"
import Icon2 from "../assets/images/icon2.png"
import Icon3 from "../assets/images/icon3.png"

import imgLeft from "../assets/images/left.png"

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
        title: 'Approx team members ready to online support for you',
        highlight: '875+'
    }
}


export const SECURITY_CONTENT = {
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