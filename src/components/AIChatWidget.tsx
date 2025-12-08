import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! 👋 I'm the FreshFarms AI assistant. I can help you with questions about our vegetables, fruits, pricing, shipping, and export process. How can I assist you today?",
    isBot: true,
    timestamp: new Date(),
  },
];

const botResponses: Record<string, string> = {
  pricing: "Our pricing varies based on product, quantity, and destination. For example, Premium Nashik Onions start at $2.50/kg for bulk orders. For a detailed quote, I'd recommend scheduling a meeting with our sales team. Would you like me to help you with that?",
  shipping: "We offer worldwide shipping via sea and air freight. Transit times typically range from 5-15 days for air freight and 20-45 days for sea freight, depending on your destination. All shipments include cold chain packaging to ensure freshness.",
  products: "We export a wide variety of premium produce including: Nashik Onions, Green Chilies, Thompson Grapes, Cherry Tomatoes, Carrots, Apples, and more. All our products are export-grade and meet international quality standards.",
  quality: "Quality is our top priority! We maintain FSSAI, APEDA, and GlobalGAP certifications. Every batch undergoes rigorous quality checks, and we provide complete traceability from farm to destination.",
  minimum: "Our minimum order quantity typically starts at 1 metric ton for most products. However, we can discuss flexible arrangements based on your specific needs. Shall I connect you with our team?",
  location: "We're based in Nashik, Maharashtra, India - one of India's premier agricultural regions. Nashik is famous for its onions and grapes, benefiting from ideal growing conditions.",
  default: "Thank you for your question! For detailed information about this topic, I'd recommend speaking directly with our export team. Would you like to schedule a meeting? You can book a call at any time through our Google Calendar integration above.",
};

function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
    return botResponses.pricing;
  }
  if (lowerMessage.includes('ship') || lowerMessage.includes('delivery') || lowerMessage.includes('freight')) {
    return botResponses.shipping;
  }
  if (lowerMessage.includes('product') || lowerMessage.includes('vegetable') || lowerMessage.includes('fruit') || lowerMessage.includes('what do you')) {
    return botResponses.products;
  }
  if (lowerMessage.includes('quality') || lowerMessage.includes('certif') || lowerMessage.includes('standard')) {
    return botResponses.quality;
  }
  if (lowerMessage.includes('minimum') || lowerMessage.includes('moq') || lowerMessage.includes('order quantity')) {
    return botResponses.minimum;
  }
  if (lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('based')) {
    return botResponses.location;
  }
  
  return botResponses.default;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-large hover:shadow-glow transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-background rounded-2xl shadow-large border border-border overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display font-semibold">AI Assistant</p>
              <p className="text-xs text-primary-foreground/70">Ask about products, pricing & more</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/20">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isBot ? 'bg-secondary' : 'bg-primary'
                }`}
              >
                {message.isBot ? (
                  <Bot className="w-4 h-4 text-foreground" />
                ) : (
                  <User className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
              <div
                className={`max-w-[75%] p-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-background border border-border rounded-tl-sm'
                    : 'bg-primary text-primary-foreground rounded-tr-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <Bot className="w-4 h-4 text-foreground" />
              </div>
              <div className="bg-background border border-border p-3 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-background">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our products..."
              className="flex-1 px-4 py-3 bg-secondary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
            />
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              variant="premium"
              size="icon"
              className="h-12 w-12 rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
