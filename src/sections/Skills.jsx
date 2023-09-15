import Progress from 'react-circle-progress-bar'
const Skills = () => {
    return (
        <div className="bg-[#ECF7FF] py-20">
            <div className="container mx-auto">
                <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4">
                    <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-8">
                        <Progress className={'text-2xl font-semibold'} progress={95} strokeWidth={6} reduction={0} gradient={[{ stop: 0.0, color: '#00bc9b' }, { stop: 1, color: '#5eaefd' }]} subtitle='Flutter' />
                        <Progress className={'text-2xl font-semibold lg:mt-10'} progress={97} strokeWidth={6} reduction={0} gradient={[{ stop: 0.0, color: '#00bc9b' }, { stop: 1, color: '#5eaefd' }]} subtitle='Firebase' />
                        <Progress className={'text-2xl font-semibold lg:-mt-10'} progress={95} strokeWidth={6} reduction={0} gradient={[{ stop: 0.0, color: '#00bc9b' }, { stop: 1, color: '#5eaefd' }]} subtitle='GetX' />
                        <Progress className={'text-2xl font-semibold'} progress={90} strokeWidth={6} reduction={0} gradient={[{ stop: 0.0, color: '#00bc9b' }, { stop: 1, color: '#5eaefd' }]} subtitle='Rest API' />
                    </div>
                    <div className='col-span-2 lg:ms-14 lg:p-0 px-4'>
                        <div className='-mt-10'>
                            <h2 className="text-secondaryColor text-2xl font-semibold pt-10">My Skills</h2>
                            <h3 className="text-titleColor text-5xl font-bold pb-8 pt-4">Beautiful & Unique Digital Experiences</h3>
                        </div>
                        <p className='text-xl text-textColor'>"Proficient app developer skilled in creating cross-platform applications using Flutter framework. Experienced in integrating Firebase services for real-time databases, authentication, and cloud storage. Well-versed in managing app state and navigation using the GetX package, enhancing user experience. Adept at working with REST APIs to seamlessly connect apps with external data sources, ensuring smooth data retrieval and updates. <br />
                            Passionate about delivering high-quality, responsive, and feature-rich applications that meet both user needs and technical standards."</p>
                        <button className='primaryBtn mt-4'>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;