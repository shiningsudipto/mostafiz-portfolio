import Progress from 'react-circle-progress-bar'
const Skills = () => {
    return (
        <div id='#about' className="bg-[#ECF7FF] py-20">
            <div className="container mx-auto">
                {/* lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4 */}
                <div className="flex lg:flex-row flex-col-reverse gap-4">
                    <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-10">

                        <div className='bg-white p-4 mx-auto rounded-xl h-[240px]'>
                            <Progress className={'text-2xl font-Josefin font-semibold'} progress={95} strokeWidth={6} reduction={0} gradient={[{ stop: 0.0, color: '#5BC2F0' }, { stop: 1, color: '#015496' }]} subtitle='Flutter' />
                        </div>
                        <div className='bg-white p-4 mx-auto rounded-xl h-[240px] lg:mt-10'>
                            <Progress className={'text-2xl font-semibold'} progress={85} strokeWidth={6} reduction={0} gradient={[{ stop: 0.0, color: '#F7C429' }, { stop: 1, color: '#ED7E0B' }]} subtitle='Firebase' />

                        </div>
                        <div className='bg-white p-4 mx-auto rounded-xl h-[240px] lg:-mt-14'>
                            <Progress className={'text-2xl font-semibold'} progress={93} strokeWidth={6} reduction={0} gradient={[{ stop: 0.0, color: '#CD71E7' }, { stop: 1, color: '#9057FF' }]} subtitle='GetX' />

                        </div>
                        <div className='bg-white p-4 mx-auto rounded-xl h-[240px] lg:-mt-4'>
                            <Progress className={'text-2xl font-semibold'} progress={92} strokeWidth={6} reduction={0} gradient={[{ stop: 0.0, color: '#09B7E7' }, { stop: 1, color: '#0878A8' }]} subtitle='Rest API' />

                        </div>
                    </div>
                    {/* col-span-2 lg:ms-14 lg:p-0 px-4 */}
                    <div className='lg:w-2/3 px-6'>
                        <div className='-mt-10 font-Josefin lg:text-left text-center'>
                            <h2 className="text-secondaryColor lg:text-2xl text-xl font-semibold pt-10">My Skills</h2>
                            <h3 className="text-titleColor lg:text-5xl text-2xl font-bold pb-8 pt-4">Beautiful & Unique Digital Experiences</h3>
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