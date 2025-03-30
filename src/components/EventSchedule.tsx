
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  speaker: string;
  description: string;
  type: 'talk' | 'break' | 'registration' | 'opening' | 'closing' | 'qa';
}

const EventSchedule = () => {
  const scheduleData: ScheduleItem[] = [
    {
      id: 1,
      time: "08:30 - 09:30",
      title: "Registration & Welcome Coffee",
      speaker: "",
      description: "Check-in, collect your badges and networking materials",
      type: "registration"
    },
    {
      id: 2,
      time: "09:30 - 10:00",
      title: "Opening Ceremony",
      speaker: "Host Committee",
      description: "Welcome address by the organizers and introduction to TEDxCUET",
      type: "opening"
    },
    {
      id: 3,
      time: "10:00 - 10:45",
      title: "The Future of Ethical AI",
      speaker: "Dr. Sarah Johnson",
      description: "Exploring the challenges and solutions for ethical AI development",
      type: "talk"
    },
    {
      id: 4,
      time: "10:45 - 11:15",
      title: "Morning Tea Break",
      speaker: "",
      description: "Refresh yourself with beverages and light snacks",
      type: "break"
    },
    {
      id: 5,
      time: "11:15 - 12:00",
      title: "Climate Resilience in Bangladesh",
      speaker: "Ahmed Hassan",
      description: "Innovative approaches to building climate resilience in vulnerable areas",
      type: "talk"
    },
    {
      id: 6,
      time: "12:00 - 12:45",
      title: "Sustainable Development through Social Business",
      speaker: "Maya Patel",
      description: "How social enterprises are transforming rural communities",
      type: "talk"
    },
    {
      id: 7,
      time: "12:45 - 14:00",
      title: "Lunch Break & Networking",
      speaker: "",
      description: "Enjoy lunch while connecting with speakers and attendees",
      type: "break"
    },
    {
      id: 8,
      time: "14:00 - 14:45",
      title: "Quantum Computing: The Next Frontier",
      speaker: "Dr. James Wilson",
      description: "How quantum computing will revolutionize technology",
      type: "talk"
    },
    {
      id: 9,
      time: "14:45 - 15:30",
      title: "Q&A Panel Session",
      speaker: "All Speakers",
      description: "Interactive session with direct engagement with our speakers",
      type: "qa"
    },
    {
      id: 10,
      time: "15:30 - 16:00",
      title: "Closing Remarks",
      speaker: "Organizing Committee",
      description: "Wrap-up of the day's events and acknowledgments",
      type: "closing"
    }
  ];
  
  const getItemColor = (type: string) => {
    switch(type) {
      case 'talk': return 'border-tedred';
      case 'break': return 'border-green-500';
      case 'registration': return 'border-blue-400';
      case 'opening': return 'border-yellow-500';
      case 'closing': return 'border-purple-500';
      case 'qa': return 'border-orange-500';
      default: return 'border-gray-500';
    }
  };
  
  const getItemDotColor = (type: string) => {
    switch(type) {
      case 'talk': return 'bg-tedred';
      case 'break': return 'bg-green-500';
      case 'registration': return 'bg-blue-400';
      case 'opening': return 'bg-yellow-500';
      case 'closing': return 'bg-purple-500';
      case 'qa': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="schedule" className="section-padding bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="title">
            Event Schedule
          </h1>
          <h2 className="subtitle">
            Plan your day at TEDxCUET with our comprehensive event schedule.
          </h2>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10 z-0"></div>
          
          {scheduleData.map((item, index) => {
            // Determine if item should appear on left or right side
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={item.id}
                className={cn(
                  "flex items-stretch mb-12 relative z-10",
                  isEven ? "flex-row" : "flex-row-reverse"
                )}
                variants={itemVariants}
              >
                {/* Time capsule - shows on opposite side from content */}
                <div className={cn(
                  "w-1/2 flex",
                  isEven ? "justify-end pr-8" : "justify-start pl-8"
                )}>
                  <div className="bg-zinc-900/80 rounded-full px-5 py-2 self-start mt-4 border border-white/10 backdrop-blur-sm">
                    <span className="font-mono text-lg whitespace-nowrap">{item.time}</span>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 border-white/20",
                    getItemDotColor(item.type)
                  )}></div>
                </div>
                
                {/* Content */}
                <div className={cn(
                  "w-1/2",
                  isEven ? "pl-8" : "pr-8"
                )}>
                  <div className={cn(
                    "glass-card rounded-lg p-6 border-l-4 hover:translate-y-[-5px] transition-all duration-300",
                    getItemColor(item.type)
                  )}>
                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                    {item.speaker && (
                      <p className={cn(
                        "text-lg mb-2",
                        item.type === 'talk' ? "text-tedred" : "text-white/80"
                      )}>{item.speaker}</p>
                    )}
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EventSchedule;
