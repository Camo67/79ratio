import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How often do you backup your business-critical data?",
    options: [
      { text: "Daily automated backups", score: 20 },
      { text: "Weekly backups", score: 15 },
      { text: "Monthly or less frequent", score: 5 },
      { text: "No regular backup schedule", score: 0 }
    ]
  },
  {
    id: 2,
    question: "What cybersecurity measures do you have in place?",
    options: [
      { text: "Multi-layered security with monitoring", score: 20 },
      { text: "Basic antivirus and firewall", score: 10 },
      { text: "Only antivirus software", score: 5 },
      { text: "Minimal or no security measures", score: 0 }
    ]
  },
  {
    id: 3,
    question: "How do you handle IT support and maintenance?",
    options: [
      { text: "24/7 professional IT support", score: 20 },
      { text: "Regular maintenance with IT partner", score: 15 },
      { text: "Occasional IT support when needed", score: 8 },
      { text: "Handle everything internally/DIY", score: 3 }
    ]
  },
  {
    id: 4,
    question: "What's your disaster recovery plan?",
    options: [
      { text: "Comprehensive tested DR plan", score: 20 },
      { text: "Basic DR plan in place", score: 12 },
      { text: "Some backup procedures", score: 6 },
      { text: "No formal disaster recovery plan", score: 0 }
    ]
  },
  {
    id: 5,
    question: "How current is your IT infrastructure?",
    options: [
      { text: "Regularly updated modern systems", score: 20 },
      { text: "Mostly current with some older components", score: 15 },
      { text: "Mix of old and new systems", score: 8 },
      { text: "Primarily outdated infrastructure", score: 3 }
    ]
  }
];

const getScoreCategory = (score: number) => {
  if (score >= 85) return { level: "IT Champion", color: "text-green-400", icon: CheckCircle };
  if (score >= 70) return { level: "Well Protected", color: "text-blue-400", icon: Shield };
  if (score >= 50) return { level: "Proactive Protector", color: "text-yellow-400", icon: TrendingUp };
  if (score >= 30) return { level: "Basic Coverage", color: "text-orange-400", icon: Clock };
  return { level: "Vulnerable", color: "text-red-400", icon: AlertTriangle };
};

const getScoreMessage = (score: number) => {
  if (score >= 85) {
    return "Excellent! You have a robust IT infrastructure with strong security and backup procedures. Consider our advanced optimization services to maximize efficiency.";
  }
  if (score >= 70) {
    return "Good job! Your IT setup is solid, but there are opportunities to enhance security and disaster recovery capabilities.";
  }
  if (score >= 50) {
    return "You've got some good practices in place, but there are critical gaps that could leave you vulnerable to downtime or cyber threats. A free assessment can pinpoint these areas.";
  }
  if (score >= 30) {
    return "Your IT infrastructure needs attention. Several critical areas require immediate improvement to protect your business from threats and outages.";
  }
  return "Critical action needed! Your current IT setup leaves your business highly vulnerable to cyber threats and system failures. Let's schedule an urgent assessment.";
};

export default function ITAssessmentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
    setShowQuiz(false);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const scoreCategory = getScoreCategory(totalScore);
  const ScoreIcon = scoreCategory.icon;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!showQuiz && !isComplete) {
    return (
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              Free IT Assessment
            </Badge>
            
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              What's Your IT Resilience Score?
            </h2>
            
            <p className="text-[var(--text-body-large)] text-gray-400 mb-[var(--space-32)] max-w-2xl mx-auto font-sans">
              Answer 5 quick questions to see how your IT stacks up against threats and outages.
            </p>

            <Card className="mb-[var(--space-32)] bg-black border-gray-800 max-w-md mx-auto">
              <CardContent className="p-[var(--space-32)]">
                <div className="flex items-center justify-center mb-[var(--space-16)]">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-center">
                  <div className="text-[var(--text-h4)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">
                    Proactive Protector
                  </div>
                  <div className="text-[var(--text-h2)] font-bold text-white mb-[var(--space-8)] font-sans">
                    55 / 100
                  </div>
                  <p className="text-gray-400 text-[var(--text-body)] font-sans">
                    Sample Score
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans"
                onClick={() => setShowQuiz(true)}
              >
                Take Our 2-Minute IT Resilience Quiz
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-sans"
              >
                Schedule Your Free IT Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isComplete) {
    return (
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              Your IT Resilience Score
            </Badge>
            
            <Card className="mb-[var(--space-48)] bg-black border-gray-800 max-w-2xl mx-auto">
              <CardContent className="p-[var(--space-48)]">
                <div className="flex items-center justify-center mb-[var(--space-24)]">
                  <ScoreIcon className={`w-12 h-12 ${scoreCategory.color}`} />
                </div>
                
                <div className="text-center mb-[var(--space-32)]">
                  <div className={`text-[var(--text-h3)] font-bold ${scoreCategory.color} mb-[var(--space-8)] font-sans`}>
                    {scoreCategory.level}
                  </div>
                  <div className="text-[var(--text-h1)] font-bold text-white mb-[var(--space-16)] font-sans">
                    {totalScore} / 100
                  </div>
                  <Progress value={totalScore} className="w-full mb-[var(--space-24)]" />
                </div>

                <p className="text-gray-400 text-[var(--text-body-large)] mb-[var(--space-32)] font-sans">
                  {getScoreMessage(totalScore)}
                </p>

                <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
                  <Button 
                    size="lg" 
                    className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans"
                  >
                    Schedule Your Free IT Assessment
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-gray-600 text-gray-400 hover:bg-gray-800 font-sans"
                    onClick={resetQuiz}
                  >
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-[var(--space-48)]">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              IT Resilience Quiz - Question {currentQuestion + 1} of {questions.length}
            </Badge>
            
            <Progress value={progress} className="w-full max-w-md mx-auto mb-[var(--space-24)]" />
          </div>

          <Card className="bg-black border-gray-800 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-center text-[var(--text-h3)] font-sans">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-[var(--space-16)]">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="p-[var(--space-24)] h-auto border-gray-700 text-left hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-200 font-sans"
                    onClick={() => handleAnswer(option.score)}
                  >
                    <span className="text-white text-[var(--text-body)]">
                      {option.text}
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}