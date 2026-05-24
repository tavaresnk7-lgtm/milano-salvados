/**
 * DESIGN: Deep Navy Command — ChatBot Component
 * Premium animated chatbot with Anthropic API integration
 * Colors: Navy (#F0F4FA), Gold (#D4A017), White (#1A2A4E)
 * Features: Automatic name and email extraction from user messages
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface UserProfile {
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
}

interface ChatBotConfig {
  apiKey: string;
  whatsapp: string;
  email: string;
  telefone: string;
}

const CHATBOT_CONFIG: ChatBotConfig = {
  apiKey: "sk-ant-v1-demo-key-for-testing",
  whatsapp: "5511973308895",
  email: "aiman@milanosalvados.com.br",
  telefone: "(11) 97330-8895",
};

// Knowledge base for instant responses
const KNOWLEDGE_BASE = [
  {
    keys: ["logística reversa", "logistica reversa", "como funciona", "reversa"],
    answer: `A **logística reversa** é o processo de retornar produtos ao ciclo produtivo de forma legal, segura e sustentável.

Na Milano, transformamos produtos químicos em desuso em valor:

✅ Evitamos multas e passivos ambientais
✅ Garantimos destinação ambientalmente correta
✅ Emitimos documentação de rastreabilidade
✅ Podemos reverter sua despesa em **receita**

Fale com a gente: ${CHATBOT_CONFIG.telefone}`,
  },
  {
    keys: ["domissanitários", "domissanitarios", "limpeza", "higienização"],
    answer: `**Domissanitários** são produtos destinados a limpeza, desinfecção e higienização.

Exemplos aceitos:
🧼 Detergentes e desinfetantes
🦟 Inseticidas e raticidas
🫧 Sabões, amaciantes e alvejantes
🍽️ Produtos para higienização

Se sua empresa tem estoque parado, a Milano pode ajudar!`,
  },
  {
    keys: ["têxtil", "textil", "tecido", "corante"],
    answer: `Na categoria **têxtil**, trabalhamos com produtos químicos usados na indústria de tecidos:

🧵 Corantes e fixadores
⚗️ Alvejantes e auxiliares químicos
🏭 Produtos de processo industrial

Se sua empresa tem produtos fora de especificação, entre em contato!`,
  },
  {
    keys: ["tinta", "solvente", "diluente", "verniz"],
    answer: `Recebemos **tintas, solventes e correlatos** que precisam de destinação correta:

🎨 Tintas imobiliárias e industriais
🪣 Solventes e diluentes
⚗️ Vernizes, lacas e resinas

Produtos do segmento de tintas são controlados. A Milano está regularizada!`,
  },
  {
    keys: ["cosméticos", "cosmeticos", "maquiagem", "beleza"],
    answer: `Trabalhamos com **cosméticos** em desuso ou fora de especificação:

💄 Maquiagens, cremes, loções
🧴 Xampus, condicionadores, sabonetes
🌸 Perfumes e fragrâncias

Fazemos a destinação ambientalmente correta. Consulte-nos sobre condições!`,
  },
  {
    keys: ["licença", "licenca", "certificação", "anvisa", "policia federal"],
    answer: `A Milano possui **Licenças para Produtos Químicos Controlados**, que permitem:

📋 Exercer atividade com produtos sujeitos à fiscalização
🏭 Atender empresas em todo o Brasil
✅ Conformidade com Anvisa, Polícia Federal e demais órgãos

Essas licenças garantem **segurança jurídica** para sua empresa!`,
  },
  {
    keys: ["contato", "telefone", "email", "falar", "atendimento"],
    answer: `Entre em contato com a Milano:

📱 **WhatsApp:** ${CHATBOT_CONFIG.telefone}
☎️ **Telefone:** ${CHATBOT_CONFIG.telefone}
📧 **Email:** ${CHATBOT_CONFIG.email}

Nossa equipe responde em horário comercial, de segunda a sexta.`,
  },
  {
    keys: ["whatsapp", "wpp", "zap", "mensagem"],
    answer: `Sim! Atendemos pelo WhatsApp:

📱 **(11) 97330-8895**

É o canal mais rápido — você pode enviar fotos dos produtos, quantidade e condições. Nossa equipe avalia em poucas horas!`,
  },
  {
    keys: ["vender", "venda", "receita", "dinheiro", "valor"],
    answer: `Transformar produtos em desuso em receita é nossa especialidade!

💰 Dependendo do produto e condições, podemos **recomprá-lo**
📦 Produtos vencidos ainda podem ter valor
📝 Todo o processo é documentado e 100% legal

Não descarte sem antes nos consultar!`,
  },
  {
    keys: ["coleta", "buscar", "retirada", "transporte", "frete"],
    answer: `Para solicitar coleta:

1️⃣ Entre em contato pelo WhatsApp ou email
2️⃣ Informe o tipo, volume e localização
3️⃣ Nossa equipe avalia e envia proposta
4️⃣ Agendamos a retirada conforme sua disponibilidade

📱 WhatsApp: ${CHATBOT_CONFIG.telefone}`,
  },
  {
    keys: ["preço", "preco", "custo", "orçamento", "orcamento", "cotação"],
    answer: `Os valores dependem de vários fatores:

📦 Tipo e volume do produto
🏷️ Condições de armazenamento
📋 Documentação disponível (NF, FISPQ)
🚚 Necessidade de transporte

Para receber uma **avaliação sem compromisso**, envie os detalhes!`,
  },
  {
    keys: ["documentação", "documentacao", "nota fiscal", "fispq", "manifesto"],
    answer: `Na logística reversa, trabalhamos com toda a documentação necessária:

📄 Manifesto de Resíduos (MTR)
📋 FISPQ (Ficha de Informações de Segurança)
🏷️ Nota Fiscal de entrada/saída
✅ Certificado de destinação

Recomendamos ter em mãos a documentação original!`,
  },
  {
    keys: ["sobre", "empresa", "história", "milano", "quem sao"],
    answer: `A **Milano** é especializada em logística reversa de produtos químicos.

Nossa missão: reverter sua despesa em receita, dando destinação correta e sustentável.

🏆 Clientes satisfeitos em todo o Brasil
📍 São Paulo — SP
🔒 Empresa licenciada e regularizada

Visite nossa página "Sobre Nós" para mais informações!`,
  },
  {
    keys: ["sustentável", "sustentavel", "meio ambiente", "ambiental", "reciclagem"],
    answer: `A Milano tem o **compromisso ambiental** no centro do negócio:

♻️ Priorizamos a reutilização e reprocessamento
🌱 Evitamos o descarte irregular
📊 Rastreamos 100% dos produtos destinados
⚖️ Cumprimos toda a legislação ambiental

Ao escolher a Milano, sua empresa também cuida do planeta!`,
  },
  {
    keys: ["multa", "infração", "irregular", "ilegal", "crime ambiental"],
    answer: `O descarte irregular de produtos químicos pode resultar em:

⚠️ Multas pesadas do Ibama e Cetesb
🚨 Embargo da empresa
👮 Responsabilização penal dos gestores
📰 Dano reputacional grave

A **Milano** oferece destinação 100% legal e documentada!`,
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: null,
    email: null,
    phone: null,
    company: null,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history and user profile from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ms_chat_history");
    const savedProfile = localStorage.getItem("ms_user_profile");

    if (savedProfile) {
      try {
        setUserProfile(JSON.parse(savedProfile));
      } catch (e) {
        console.error("Failed to load user profile:", e);
      }
    }

    if (saved) {
      try {
        setMessages(
          JSON.parse(saved).map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          }))
        );
      } catch (e) {
        console.error("Failed to load chat history:", e);
      }
    } else {
      // Initial welcome message
      setMessages([
        {
          id: "welcome",
          role: "bot",
          content:
            "Olá! 👋 Bem-vindo à Milano. Como posso ajudá-lo com logística reversa de produtos químicos?\n\nPara melhor atendê-lo, qual é o seu nome?",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  // Save chat history and user profile to localStorage
  useEffect(() => {
    localStorage.setItem("ms_chat_history", JSON.stringify(messages));
    localStorage.setItem("ms_user_profile", JSON.stringify(userProfile));
  }, [messages, userProfile]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Extract user information from messages
  const extractUserInfo = (text: string) => {
    const emailRegex =
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const phoneRegex = /\(?\d{2}\)?\s?9?\d{4}-?\d{4}/g;

    const emails = text.match(emailRegex);
    const phones = text.match(phoneRegex);

    setUserProfile((prev) => ({
      ...prev,
      email: emails ? emails[0] : prev.email,
      phone: phones ? phones[0] : prev.phone,
    }));
  };

  // Extract name from user message
  const extractName = (text: string) => {
    const namePatterns = [
      /meu nome (?:é|eh) ([a-záéíóúâêôãõç\s]+)/i,
      /(?:sou|eu sou) ([a-záéíóúâêôãõç\s]+)/i,
      /(?:chamo-me|me chamo) ([a-záéíóúâêôãõç\s]+)/i,
      /^([a-záéíóúâêôãõç]+)$/i, // Single word as name
    ];

    for (const pattern of namePatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        const name = match[1].trim().split(/\s+/)[0];
        if (name.length > 2) {
          setUserProfile((prev) => ({
            ...prev,
            name: name.charAt(0).toUpperCase() + name.slice(1),
          }));
          return true;
        }
      }
    }
    return false;
  };

  const findKBAnswer = (query: string): string | null => {
    const lowerQuery = query.toLowerCase();
    for (const item of KNOWLEDGE_BASE) {
      if (item.keys.some((key) => lowerQuery.includes(key))) {
        return item.answer;
      }
    }
    return null;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    // Extract user information from the message
    extractUserInfo(input);
    const nameExtracted = extractName(input);

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // First check knowledge base
      const kbAnswer = findKBAnswer(input);

      if (kbAnswer) {
        let response = kbAnswer;

        // Ask for name if not provided
        if (!userProfile.name && !nameExtracted) {
          response +=
            "\n\n_Obs: Qual é o seu nome para melhor atendê-lo?_";
        }
        // Ask for email if not provided
        else if (!userProfile.email) {
          response +=
            "\n\n_Obs: Qual é o seu e-mail para que possamos entrar em contato?_";
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content: response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        // If no KB match and API key is configured, call Anthropic API
        if (CHATBOT_CONFIG.apiKey !== "sk-ant-v1-demo-key-for-testing") {
          const response = await fetch(
            "https://api.anthropic.com/v1/messages",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": CHATBOT_CONFIG.apiKey,
                "anthropic-version": "2023-06-01",
              },
              body: JSON.stringify({
                model: "claude-opus-4-1-20250805",
                max_tokens: 1024,
                system: `Você é um assistente de IA da Milano, especialista em logística reversa de produtos químicos. 
Responda de forma profissional, amigável e concisa. Se a pergunta não for relacionada à Milano ou logística reversa, 
redirecione educadamente para os serviços da empresa.`,
                messages: [
                  {
                    role: "user",
                    content: input,
                  },
                ],
              }),
            }
          );

          if (!response.ok) {
            throw new Error("API request failed");
          }

          const data = await response.json();
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "bot",
            content:
              data.content[0].text ||
              "Desculpe, não consegui processar sua pergunta. Entre em contato conosco!",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        } else {
          // Fallback response when API key not configured
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "bot",
            content: `Desculpe, não tenho informações sobre isso. Para dúvidas específicas, entre em contato conosco:\n\n📱 WhatsApp: ${CHATBOT_CONFIG.telefone}\n📧 Email: ${CHATBOT_CONFIG.email}`,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast.error("Erro ao processar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-40 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: "#F0F4FA",
          border: "2px solid #D4A017",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} color="#D4A017" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} color="#D4A017" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-44 right-8 z-40 w-96 h-[550px] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{
              background: "#1A2A4E",
              border: "1px solid rgba(212, 160, 23, 0.2)",
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-4 flex items-center gap-3 border-b"
              style={{
                background: "#F0F4FA",
                borderColor: "rgba(212, 160, 23, 0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: "#D4A017" }}
              >
                MS
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm">Milano</h3>
                <p className="text-xs" style={{ color: "#D4A017" }}>
                  ● Assistente IA disponível
                </p>
              </div>
            </div>

            {/* User Profile Display */}
            {(userProfile.name || userProfile.email) && (
              <div
                className="px-4 py-2 text-xs border-b"
                style={{
                  background: "rgba(212, 160, 23, 0.05)",
                  borderColor: "rgba(212, 160, 23, 0.2)",
                  color: "#F0F4FA",
                }}
              >
                {userProfile.name && (
                  <p>
                    <strong>👤 Nome:</strong> {userProfile.name}
                  </p>
                )}
                {userProfile.email && (
                  <p>
                    <strong>📧 Email:</strong> {userProfile.email}
                  </p>
                )}
              </div>
            )}

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{ background: "#F8F6F2" }}
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2.5 rounded-lg text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "text-white"
                        : "border border-gray-200"
                    }`}
                    style={{
                      background:
                        msg.role === "user" ? "#F0F4FA" : "white",
                      color: msg.role === "user" ? "#1A2A4E" : "#F0F4FA",
                    }}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#D4A017" }}
                    />
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div
              className="p-4 border-t flex gap-2"
              style={{ borderColor: "rgba(212, 160, 23, 0.2)" }}
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Digite sua dúvida..."
                className="flex-1 px-3 py-2 rounded-lg text-sm resize-none focus:outline-none"
                style={{
                  background: "#F8F6F2",
                  border: "1px solid rgba(212, 160, 23, 0.2)",
                  color: "#F0F4FA",
                }}
                disabled={loading}
                rows={1}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="px-3 py-2 rounded-lg flex items-center justify-center disabled:opacity-50"
                style={{ background: "#F0F4FA" }}
              >
                <Send size={18} color="#D4A017" />
              </motion.button>
            </div>

            {/* Footer */}
            <div
              className="px-4 py-2 text-center text-xs"
              style={{ color: "#5A7BA8", background: "#F8F6F2" }}
            >
              Powered by IA ·{" "}
              <a
                href={`https://wa.me/${CHATBOT_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#D4A017" }}
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
