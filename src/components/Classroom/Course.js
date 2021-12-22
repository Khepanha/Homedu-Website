const Navbar = ({isOpen, toggle}) =>{
    return (
        <div>
            <div className="pt-24 flex flex-row">
                {/* Navigation */}
                <div className={isOpen ? 'flex flex-col sticky top-0 w-1/4 h-screen border-r border-gray-300':'hidden'}>
                    <div className="flex flex-row justify-between items-center px-8">
                        <strong className="flex h-20 justify-center items-center border-b border-gray-300 text-lg">Course content</strong>
                        <svg className="w-6 h-6 cursor-pointer transform hover:-rotate-90 transition duration-300" onClick={toggle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div className="flex-auto overflow-y-auto">
                        <a className="block h-18 border-b bg-blue-100" href="https://www.youtube.com">
                            <div className="border-l-4 border-blue-500 p-2 space-y-4">
                                <div className="flex flex-row flex-non items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 1</strong>
                                    <div className="flex-none">Password Power-Up</div>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 2</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 3</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 4</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 5</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 6</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 7</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 8</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 9</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 10</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                        <a className="block h-18 border-b" href="https://www.youtube.com">
                            <div className="p-2 space-y-4">
                                <div className="flex flex-row items-center space-x space-x-4">
                                    <strong className="flex-none">Lesson: 11</strong>
                                    <span className="flex-none">Password Power-Up</span>
                                </div>
                                <div className="truncate text-xs text-gray-500">This lesson was originally created by Common Sense Education</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Vidoes Content */}
                <div className="flex flex-col w-full overflow-y-auto">
                    <div className="flex-none h-150 m-4 border-2 border-gray-300">
                        <div className={!isOpen ? 'flex flex-row cursor-pointer left-0 top-0':'hidden'} onClick={toggle}>
                            <p className="px-4">course content</p>
                            <svg className="-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </div>
                    <div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                        <div className="m-4">Bottom</div>
                    </div>
                    <div className="flex flex-col justify-between items-center h-60 text-white bg-black mt-16">
                        <div className="mt-8">
                            <p>Contact Us</p>
                            <li>Email: homedu@gmail.com</li>
                            <li>Phone: 00000000007</li>

                        </div>
                        <small className = "">HomeDU © 2021</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;