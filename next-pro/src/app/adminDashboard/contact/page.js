'use client';

import { useState, useEffect } from 'react';

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    // In a real application, fetch messages from API
    // For now, use dummy data
    const dummyMessages = [
      {
        id: '1',
        name: 'John Anderson',
        email: 'john.anderson@example.com',
        message: 'Hello, I would like to inquire about your dental implant procedures. Can you please provide more information about the process, cost, and recovery time?',
        timestamp: '2025-04-07T14:30:00',
        replied: false
      },
      {
        id: '2',
        name: 'Sarah Thompson',
        email: 'sarah.thompson@example.com',
        message: 'I need to reschedule my appointment that was set for April 15th. Is it possible to move it to the following week? Thank you for your assistance.',
        timestamp: '2025-04-06T09:15:00',
        replied: true
      },
      {
        id: '3',
        name: 'Michael Wilson',
        email: 'michael.wilson@example.com',
        message: 'Can you tell me if Dr. Smith is accepting new patients? I have been recommended to see him specifically for my heart condition.',
        timestamp: '2025-04-05T16:45:00',
        replied: false
      },
      {
        id: '4',
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        message: 'I recently visited your clinic and I wanted to express my appreciation for the excellent care I received from Dr. Johnson and his team. The entire experience was very positive.',
        timestamp: '2025-04-04T11:20:00',
        replied: true
      },
      {
        id: '5',
        name: 'Robert Brown',
        email: 'robert.brown@example.com',
        message: 'I would like to know if you offer any payment plans for major procedures? I need some extensive dental work but would like to spread the payments over time.',
        timestamp: '2025-04-03T13:50:00',
        replied: false
      }
    ];

    setMessages(dummyMessages);
    setLoading(false);
  }, []);

  const filteredMessages = filter === 'all' 
    ? messages 
    : messages.filter(message => 
        filter === 'replied' ? message.replied : !message.replied
      );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleMarkAsReplied = (id) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, replied: true } : message
    ));
    setSelectedMessage(null);
  };

  return (
    <div>
      <div className="pb-5 border-b border-gray-200 mb-5">
        <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="col-span-1 bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Messages</h2>
              <select
                id="filter"
                name="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="block pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option value="all">All Messages</option>
                <option value="unreplied">Unreplied</option>
                <option value="replied">Replied</option>
              </select>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {loading ? (
              <div className="p-4 text-center text-gray-500">Loading messages...</div>
            ) : filteredMessages.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No messages found.</div>
            ) : (
              filteredMessages.map((message) => (
                <div 
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedMessage?.id === message.id ? 'bg-primary-light' : ''
                  } ${
                    !message.replied ? 'border-l-4 border-primary' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{message.name}</h3>
                      <p className="text-xs text-gray-500">{message.email}</p>
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(message.timestamp)}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 truncate">
                    {message.message}
                  </p>
                  <div className="mt-2 flex justify-end">
                    {message.replied ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Replied
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="col-span-2 bg-white shadow rounded-lg">
          {selectedMessage ? (
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Message Details</h2>
                  <div>
                    {!selectedMessage.replied && (
                      <button
                        onClick={() => handleMarkAsReplied(selectedMessage.id)}
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Mark as Replied
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-4 flex-grow">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">From</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedMessage.name} ({selectedMessage.email})</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date</h3>
                  <p className="mt-1 text-sm text-gray-900">{formatDate(selectedMessage.timestamp)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Message</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedMessage.message}</p>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div>
                  <label htmlFor="reply" className="block text-sm font-medium text-gray-700">
                    Reply
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="reply"
                      name="reply"
                      rows={4}
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Type your reply here..."
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-6 text-gray-500">
              Select a message to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}