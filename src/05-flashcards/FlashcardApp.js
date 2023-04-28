import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './FlashcardApp.css';

export default function FlashCardApp() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

    return (
        <div className='flash-cards'>
            <FlashcardList flashcards={flashcards} />
        </div>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: "What is 2 + 2?",
        answer: "4",
        options: ["2", "3", "4", "5"]
    },
    {
        id: 2,
        question: "Question 2?",
        answer: "Answer",
        options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    }
];