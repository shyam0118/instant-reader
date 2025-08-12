"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [selectedText, setSelectedText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

const getSelectedText = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  // Add check for tab.id
  if (tab?.id) {
    const response = await chrome.tabs.sendMessage(tab.id, { 
      action: "getSelectedText" 
    });
    
    if (response?.selectedText) {
      setSelectedText(response.selectedText);
    }
  }
};

  const speakText = () => {
    if ('speechSynthesis' in window && selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  useEffect(() => {
    getSelectedText();
  }, []);

  return (
    <div style={{ width: '300px', padding: '16px' }}>
      <Head>
        <title>Text Reader</title>
      </Head>
      <h1>Text Reader</h1>
      <div style={{ margin: '10px 0' }}>
        <strong>Selected Text:</strong>
        <p style={{ 
          border: '1px solid #ddd', 
          padding: '8px', 
          minHeight: '50px',
          borderRadius: '4px'
        }}>
          {selectedText || 'No text selected'}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button 
          onClick={speakText} 
          disabled={!selectedText || isSpeaking}
          style={{ 
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Read Aloud
        </button>
        {isSpeaking && (
          <button 
            onClick={stopSpeaking}
            style={{ 
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}