import React, { useState } from 'react';

// images
import notes from '../assets/images/notes.png';
import doubleTick from '../assets/images/double-tick.png';
import plus from '../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';

const Header = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput("");
    }

    const handleCompleteAll = () => {
        dispatch(allCompleted());
    }

    const handleClearCompleted = () => {
        dispatch(clearCompleted());
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img
                    src={notes}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    onChange={handleInput}
                    value={input}
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handleCompleteAll}>
                    <img
                        className="w-4 h-4"
                        src={doubleTick}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearCompleted}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;