import { useState } from 'react'

import img1 from '../assets/project/p1.png'
import img2 from '../assets/project/p2.png'
import img3 from '../assets/project/p3.png'

const TabSection = () => {

    const [activeTab, setActiveTab] = useState(0); // Default active tab index

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const projects = [
        {
            imgSrc: img1,
            title: 'Item 1',
            link: 'https://example.com/item1',
        },
        {
            imgSrc: img2,
            title: 'Item 2',
            link: 'https://example.com/item2',
        },
        {
            imgSrc: img3,
            title: 'Item 3',
            link: 'https://example.com/item3',
        },
    ];

    return (
        <div className='bg-white py-20'>
            <div className='container mx-auto'>
                <div className='flex justify-center pb-6'>
                    <div className="tabs">
                        <a
                            className={`tab tab-lg tab-lifted ${activeTab === 0 ? 'tab-active' : ''}`}
                            onClick={() => handleTabClick(0)}
                        >
                            Tab 1
                        </a>
                        <a
                            className={`tab tab-lg tab-lifted ${activeTab === 1 ? 'tab-active' : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            Tab 2
                        </a>
                        <a
                            className={`tab tab-lg tab-lifted ${activeTab === 2 ? 'tab-active' : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            Tab 3
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        projects.map(project => <div key={project.title}>
                            <a className='' href={[project.link]} target='_blank'>
                                <img className='w-full projectImg hover:rounded-3xl' src={project.imgSrc} alt="" />

                            </a>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TabSection;