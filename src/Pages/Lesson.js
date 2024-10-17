// src/App.js

import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Lessons</h1>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <a href="#lesson1" className="text-gray-800 hover:text-blue-500">
              Lesson 1: Introduction
            </a>
          </li>
          <li className="mb-2">
            <a href="#lesson2" className="text-gray-800 hover:text-blue-500">
              Lesson 2: Alphabet and Pronunciation System
            </a>
          </li>
          <li className="mb-2">
            <a href="#lesson3" className="text-gray-800 hover:text-blue-500">
              Lesson 3: Numbers
            </a>
          </li>
          <li className="mb-2">
            <a href="#lesson4" className="text-gray-800 hover:text-blue-500">
              Lesson 4: Family
            </a>
          </li>
          <li className="mb-2">
            <a href="#lesson5" className="text-gray-800 hover:text-blue-500">
              Lesson 5: Colors
            </a>
          </li>
          <li className="mb-2">
            <a href="#lesson6" className="text-gray-800 hover:text-blue-500">
              Lesson 6: Days of the Week
            </a>
          </li>
          <li className="mb-2">
            <a href="#lesson7" className="text-gray-800 hover:text-blue-500">
              Lesson 7: Objects
            </a>
          </li>
          <li className="mb-2">
            <a href="#lesson8" className="text-gray-800 hover:text-blue-500">
              Lesson 8: Subject, Verb, Object, and Sentence Construction
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MainContent = () => {
  const youtubeVideoUrl = 'https://www.youtube.com/watch?v=hK-7cHa69lk';
  const youtubeVideoId = youtubeVideoUrl.split('v=')[1]; // Extract the video ID

  return (
    <div className="flex-1 p-6 overflow-auto">
      <section id="lesson1" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lesson 1: Introduction - Bemba Greetings</h2>
        <p>
          Welcome to Lesson 1! In this lesson, we will cover the basics and provide an overview of what you will learn.
        </p>
        <p>
          Bemba is a Bantu language spoken in Zambia, Democratic Republic of Congo, and Tanzania. It is the most widely spoken language in Zambia, where it is an official language.
        </p>
        <p>Here are a few basic words and phrases in Bemba:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Hello: Mwaikale</li>
          <li>How are you?: Uli bane?</li>
          <li>I am fine: Nali bwino</li>
          <li>Thank you: Tusaanana</li>
          <li>Yes: Ee</li>
          <li>No: Te</li>
          <li>Goodbye: Kwaheri</li>
        </ul>
        <p>
          To learn more about Bemba, there are a number of resources available online that can help you get started. Some options include language learning apps, online courses, and language exchange programs that can connect you with native speakers of Bemba. You can also try finding a tutor or language teacher in your area who can provide more structured lessons.
        </p>
        <p>Please follow through with the slide and flash cards as well as the audio lessons:</p>
        <ul className="list-disc list-inside mb-4">
          <a href={youtubeVideoUrl} className="text-blue-500 hover:underline">
            <img src={`https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`} alt="YouTube Video Thumbnail" className="mb-2" />
            YouTube Link
          </a>
          <li><a href="https://www.audio-lesson-link.com" className="text-blue-500 hover:underline">Audio Lesson</a></li>
          <li><a href="https://www.pdf-link.com" className="text-blue-500 hover:underline">PDF</a></li>
          <li><a href="https://www.slide-link.com" className="text-blue-500 hover:underline">Slide</a></li>
          <li><a href="https://www.flashcards-link.com" className="text-blue-500 hover:underline">Flash Cards</a></li>
        </ul>
      </section>
      <section id="lesson2" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lesson 2: Alphabet and Pronunciation System</h2>
        <p>
          In this lesson, we will cover the Bemba alphabet and pronunciation. This is fundamental for reading and speaking Bemba correctly.
        </p>
        <p>The Bemba alphabet consists of the following letters:</p>
        <ul className="list-disc list-inside mb-4">
          <li>A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</li>
        </ul>
        <p>
          Pronunciation in Bemba is relatively straightforward as it follows a phonetic system. Each letter typically corresponds to a single sound. For example:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>A - /a/ as in "father"</li>
          <li>E - /e/ as in "bet"</li>
          <li>I - /i/ as in "machine"</li>
          <li>O - /o/ as in "pot"</li>
          <li>U - /u/ as in "boot"</li>
        </ul>
        <p>
          To practice pronunciation, use the audio resources provided to hear how the letters and words are pronounced by native speakers.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.audio-lesson-link.com" className="text-blue-500 hover:underline">Audio Lesson</a></li>
          <li><a href="https://www.pdf-link.com" className="text-blue-500 hover:underline">PDF</a></li>
          <li><a href="https://www.slide-link.com" className="text-blue-500 hover:underline">Slide</a></li>
          <li><a href="https://www.flashcards-link.com" className="text-blue-500 hover:underline">Flash Cards</a></li>
        </ul>
      </section>
      <section id="lesson3" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lesson 3: Numbers</h2>
        <p>
          In this lesson, we will learn how to count from 1 to 10 in Bemba and understand how to form numbers beyond ten.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>1</strong> - <em>Cimo</em></li>
          <li><strong>2</strong> - <em>Cibili</em></li>
          <li><strong>3</strong> - <em>Citatu</em></li>
          <li><strong>4</strong> - <em>Cine</em></li>
          <li><strong>5</strong> - <em>Cisano</em></li>
          <li><strong>6</strong> - <em>Cisano na cimo</em></li>
          <li><strong>7</strong> - <em>Cisano na cibili</em></li>
          <li><strong>8</strong> - <em>Cisano na citatu</em></li>
          <li><strong>9</strong> - <em>Cisano na cine</em></li>
          <li><strong>10</strong> - <em>Icuumi</em></li>
        </ul>
        <p>
          Practice counting and using these numbers in different contexts.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.audio-lesson-link.com" className="text-blue-500 hover:underline">Audio Lesson</a></li>
          <li><a href="https://www.pdf-link.com" className="text-blue-500 hover:underline">PDF</a></li>
          <li><a href="https://www.slide-link.com" className="text-blue-500 hover:underline">Slide</a></li>
          <li><a href="https://www.flashcards-link.com" className="text-blue-500 hover:underline">Flash Cards</a></li>
        </ul>
      </section>
      <section id="lesson4" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lesson 4: Family</h2>
        <p>
          In this lesson, we will learn the names of family members in Bemba and practice using them in sentences.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Father: Babu</li>
          <li>Mother: Bashi</li>
          <li>Brother: Mwine</li>
          <li>Sister: Musyani</li>
          <li>Grandfather: Babu wandi</li>
          <li>Grandmother: Bashi wandi</li>
        </ul>
        <p>
          You can practice these terms with the resources provided and try forming sentences about your family.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.audio-lesson-link.com" className="text-blue-500 hover:underline">Audio Lesson</a></li>
          <li><a href="https://www.pdf-link.com" className="text-blue-500 hover:underline">PDF</a></li>
          <li><a href="https://www.slide-link.com" className="text-blue-500 hover:underline">Slide</a></li>
          <li><a href="https://www.flashcards-link.com" className="text-blue-500 hover:underline">Flash Cards</a></li>
        </ul>
      </section>
      <section id="lesson5" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lesson 5: Colors</h2>
        <p>
          In this lesson, we will explore the names of different colors in Bemba and how to use them in sentences.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Red: Pula</li>
          <li>Blue: Bulu</li>
          <li>Green: Cibola</li>
          <li>Yellow: Mofolo</li>
          <li>Black: Mputu</li>
          <li>White: Cikuma</li>
        </ul>
        <p>
          Practice using these colors by describing objects around you in Bemba. For example, "The car is red" would be "Mota ni pula."
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.audio-lesson-link.com" className="text-blue-500 hover:underline">Audio Lesson</a></li>
          <li><a href="https://www.pdf-link.com" className="text-blue-500 hover:underline">PDF</a></li>
          <li><a href="https://www.slide-link.com" className="text-blue-500 hover:underline">Slide</a></li>
          <li><a href="https://www.flashcards-link.com" className="text-blue-500 hover:underline">Flash Cards</a></li>
        </ul>
      </section>
      <section id="lesson6" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lesson 6: Days of the Week</h2>
        <p>
          In this lesson, we will learn the names of the days of the week in Bemba.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Monday: Kukuwa</li>
          <li>Tuesday: Sazukulu</li>
          <li>Wednesday: Wukuda</li>
          <li>Thursday: Kasuba</li>
          <li>Friday: Katuwaku</li>
          <li>Saturday: Nsakye</li>
          <li>Sunday: Lwela</li>
        </ul>
        <p>
          Practice using these terms to talk about your schedule and daily activities. For example, "I have a meeting on Monday" would be "Ninena nchito pa Kukuwa."
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.audio-lesson-link.com" className="text-blue-500 hover:underline">Audio Lesson</a></li>
          <li><a href="https://www.pdf-link.com" className="text-blue-500 hover:underline">PDF</a></li>
          <li><a href="https://www.slide-link.com" className="text-blue-500 hover:underline">Slide</a></li>
          <li><a href="https://www.flashcards-link.com" className="text-blue-500 hover:underline">Flash Cards</a></li>
        </ul>
      </section>
      <section id="lesson7" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lesson 7: Objects</h2>
        <p>
          In this lesson, we will learn the names of common objects in Bemba. This will help you in everyday conversations and when describing your environment.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Book: Buku</li>
          <li>Pen: Peni</li>
          <li>Table: Tabele</li>
          <li>Chair: Chitanda</li>
          <li>Phone: Foni</li>
          <li>Window: Fulo</li>
        </ul>
        <p>
          Try using these terms to describe objects around you. For example, "The book is on the table" would be "Buku ili pa tabele."
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.audio-lesson-link.com" className="text-blue-500 hover:underline">Audio Lesson</a></li>
          <li><a href="https://www.pdf-link.com" className="text-blue-500 hover:underline">PDF</a></li>
          <li><a href="https://www.slide-link.com" className="text-blue-500 hover:underline">Slide</a></li>
          <li><a href="https://www.flashcards-link.com" className="text-blue-500 hover:underline">Flash Cards</a></li>
        </ul>
      </section>
      <section id="lesson8" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lesson 8: Subject, Verb, Object, and Sentence Construction</h2>
        <p>
          In this lesson, we will focus on the structure of sentences in Bemba. Understanding how to construct sentences using Subject, Verb, and Object (SVO) is crucial for effective communication.
        </p>
        <p>
          The typical sentence structure in Bemba follows the Subject-Verb-Object pattern. Here’s a basic guide:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Subject</strong> - the person or thing performing the action</li>
          <li><strong>Verb</strong> - the action or state</li>
          <li><strong>Object</strong> - the person or thing receiving the action</li>
        </ul>
        <p>
          Examples:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>"I eat an apple" - "Ndi kula apple"</li>
          <li>"She reads a book" - "Alya buku"</li>
          <li>"They see the car" - "Bachita mota"</li>
        </ul>
        <p>
          Practice constructing sentences by combining subjects, verbs, and objects. For example, "The teacher teaches the students" would be "Mwalimu alongesha abashitina."
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><a href="https://www.audio-lesson-link.com" className="text-blue-500 hover:underline">Audio Lesson</a></li>
          <li><a href="https://www.pdf-link.com" className="text-blue-500 hover:underline">PDF</a></li>
          <li><a href="https://www.slide-link.com" className="text-blue-500 hover:underline">Slide</a></li>
          <li><a href="https://www.flashcards-link.com" className="text-blue-500 hover:underline">Flash Cards</a></li>
        </ul>
      </section>
    </div>
  );
};

export default App;
