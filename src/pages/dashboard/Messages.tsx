import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Search, MoreVertical, Paperclip } from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      lastMessage: "That sounds great! When can we finalize?",
      time: "2 min ago",
      unread: 2,
      trade: "Web Dev ↔ Marketing",
      online: true,
    },
    {
      id: 2,
      name: "Green Valley Farms",
      avatar: "GV",
      lastMessage: "I can deliver the produce next Monday",
      time: "1 hour ago",
      unread: 0,
      trade: "Logistics ↔ Produce",
      online: true,
    },
    {
      id: 3,
      name: "TechSupport Pro",
      avatar: "TP",
      lastMessage: "Perfect! I'll start the setup next week",
      time: "3 hours ago",
      unread: 0,
      trade: "Furniture ↔ IT Support",
      online: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hi! I'm interested in your web development services",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Hello! Great to hear from you. What kind of project do you have in mind?",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "them",
      text: "I need a full e-commerce platform for my business. In exchange, I can offer you a comprehensive 6-month marketing campaign",
      time: "10:35 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "That sounds like a fair trade! Can you tell me more about the marketing services you provide?",
      time: "10:38 AM",
    },
    {
      id: 5,
      sender: "them",
      text: "We specialize in social media marketing, SEO, content creation, and email campaigns. We've helped over 50 businesses grow their online presence.",
      time: "10:40 AM",
    },
    {
      id: 6,
      sender: "me",
      text: "Impressive! I think we can work something out. Would you like to formalize this trade?",
      time: "10:45 AM",
    },
    {
      id: 7,
      sender: "them",
      text: "That sounds great! When can we finalize?",
      time: "10:48 AM",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">Communicate with your trade partners</p>
      </div>

      <Card className="shadow-card h-[calc(100vh-250px)]">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-80 border-r border-border flex flex-col">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                    selectedChat === conv.id ? "bg-muted" : ""
                  }`}
                  onClick={() => setSelectedChat(conv.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback className="bg-trade-gradient text-white">
                          {conv.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-success rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold truncate">{conv.name}</h4>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs mb-1">
                        {conv.trade}
                      </Badge>
                      <p className="text-sm text-muted-foreground truncate">
                        {conv.lastMessage}
                      </p>
                    </div>
                    {conv.unread > 0 && (
                      <Badge className="bg-primary">{conv.unread}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-trade-gradient text-white">
                    {conversations.find((c) => c.id === selectedChat)?.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">
                    {conversations.find((c) => c.id === selectedChat)?.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {conversations.find((c) => c.id === selectedChat)?.trade}
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg px-4 py-2 ${
                      msg.sender === "me"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-xs mt-1 block ${
                        msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      // Handle send message
                      setMessage("");
                    }
                  }}
                />
                <Button className="bg-trade-gradient">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Messages;
