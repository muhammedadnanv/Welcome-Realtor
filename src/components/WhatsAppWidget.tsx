import { useState } from "react";
import { Send } from "lucide-react";

const WhatsAppWidget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const sendMessage = () => {
    const messageText = message || "Hello! How can I help you today?";
    const whatsappUrl = `https://wa.me/971523585465?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Widget Button */}
      <div 
        className="widgetify-widget" 
        onClick={togglePopup}
        aria-label="Open WhatsApp Chat"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            togglePopup();
          }
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M17.6 6.32A7.85 7.85 0 0 0 12 4.02a7.95 7.95 0 0 0-6.9 12.07L4 20.02l4.05-1.06A8.02 8.02 0 0 0 12 20.02a7.98 7.98 0 0 0 8-7.93c0-2.12-.83-4.12-2.4-5.62V6.32zm-5.6 12.2c-1.18 0-2.33-.32-3.33-.92l-.24-.14-2.47.65.66-2.41-.16-.25a6.63 6.63 0 0 1-1.02-3.52 6.57 6.57 0 0 1 11.29-4.57 6.45 6.45 0 0 1 2 4.55 6.57 6.57 0 0 1-6.57 6.57l-.16.04zm3.6-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.06-.31-.1-.44.1-.13.2-.5.64-.61.77-.11.13-.23.15-.42.05-.2-.1-.84-.31-1.6-.99-.59-.52-.99-1.17-1.1-1.37-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.24-.02-.34-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33-.11 0-.24-.02-.37-.02-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.62 0 .96.7 1.88.8 2 .1.14 1.4 2.16 3.42 3.02.48.2.85.33 1.14.43.48.15.91.13 1.26.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.08-.18-.12-.37-.21z" 
            fill="white"
          />
        </svg>
      </div>

      {/* WhatsApp Popup */}
      <div 
        className={`widgetify-popup ${isPopupOpen ? 'show' : ''}`}
        role="dialog" 
        aria-labelledby="chat-title"
        aria-hidden={!isPopupOpen}
      >
        <div className="widgetify-header">
          <h3 id="chat-title">WhatsApp Chat</h3>
          <button 
            className="widgetify-close" 
            onClick={togglePopup} 
            aria-label="Close chat"
          >
            ×
          </button>
        </div>
        
        <div className="widgetify-content">
          <div style={{
            backgroundColor: '#f3f4f6', 
            padding: '8px', 
            borderRadius: '8px', 
            marginBottom: '8px', 
            maxWidth: '80%'
          }}>
            <p style={{
              margin: 0, 
              fontSize: '12px', 
              color: '#374151'
            }}>
              Hello! How can I help you today?
            </p>
          </div>
        </div>
        
        <div style={{
          padding: '12px', 
          borderTop: '1px solid #e5e7eb', 
          backgroundColor: '#f9fafb', 
          borderRadius: '0 0 10px 10px'
        }}>
          <div style={{display: 'flex', gap: '8px'}}>
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              style={{
                flexGrow: 1, 
                fontSize: '12px', 
                padding: '8px', 
                border: '1px solid #d1d5db', 
                borderRadius: '6px', 
                outline: 'none'
              }}
            />
            <button 
              onClick={sendMessage}
              style={{
                backgroundColor: '#25D366', 
                color: 'white', 
                padding: '8px', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Send message on WhatsApp"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
        
        <div className="widgetify-watermark">
          <a href="https://widgetify-two.vercel.app" target="_blank" rel="noopener noreferrer">
            Powered by Widgetify
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;