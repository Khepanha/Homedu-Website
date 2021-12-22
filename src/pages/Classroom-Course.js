import { useEffect, useState } from 'react';
import Course from '../components/Classroom/Course';

const ClassroomCourse = () => {

    const [isOpen, setIsOpen] = useState(true);
    // const [toggleNav, setToggleNav] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (window.performance) {
            if (performance.navigation.type === 1) {
                if (window.innerWidth < 1000) {
                    setIsOpen(false);
                }
            }
        }
        if (window.innerWidth < 1000) {
            setIsOpen(false);
        }
        const hideMenu = () => {
            if (window.innerWidth < 1000) {
                setIsOpen(false);
            }
            else {
                setIsOpen(true);
            }
        }
        window.addEventListener('resize', hideMenu);
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    }, []);

    return (
        <>
            <Course isOpen={isOpen} toggle={toggle}/>
        </>
    );
};

export default ClassroomCourse;