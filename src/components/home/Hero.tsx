"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, easeInOut } from "framer-motion";
import {
  FiBookOpen,
  FiArrowRight,
  FiPenTool,
  FiTrendingUp,
  FiHeart,
  FiSearch,
  FiUsers,
  FiStar,
  FiEye,
  FiMessageCircle,
  FiClock,
  FiZap,
  FiGlobe,
  FiArrowDown,
  FiChevronRight,
  FiBookmark,
  FiShare2,
} from "react-icons/fi";

export default function BlogHeroPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  return (
    <main className="min-h-screen bg-gray-800 relative overflow-hidden">
      {/* Hero Section */}
      <section className="mt-20 min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-black">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 via-transparent to-black/40"></div>
        </div>

        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 150, -50, 0],
              y: [0, -80, 40, 0],
              rotate: [0, 180, 360, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-white/15 to-gray-300/25 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -120, 80, 0],
              y: [0, 90, -60, 0],
              rotate: [360, 180, 0, 360],
              scale: [1, 0.7, 1.3, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-gradient-to-r from-gray-200/20 to-white/15 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.5, 0.5, 1],
              opacity: [0.3, 0.1, 0.6, 0.3],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-white/20 to-gray-400/30 rounded-full blur-2xl"
          />

          <motion.div
            animate={{
              x: [0, 100, -80, 50, 0],
              y: [0, -50, 70, -30, 0],
              scale: [1, 1.2, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-3/4 left-1/3 w-36 h-36 bg-gradient-to-r from-gray-100/25 to-white/20 rounded-full blur-2xl"
          />

          {/* Additional floating elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              className={`absolute w-6 h-6 bg-white/20 rounded-full blur-sm`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative backdrop-blur-sm bg-black/60 border border-gray-600/30
                     shadow-2xl rounded-3xl p-12 max-w-5xl w-full
                     hover:bg-black/70 hover:border-gray-500/40 transition-all duration-700"
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mb-12"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-28 h-28 mx-auto mb-8 bg-gradient-to-r from-white/30 to-gray-300/40 
                         rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm
                         border border-white/20"
            >
              <FiBookOpen className="w-14 h-14 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white 
                         bg-clip-text text-transparent mb-8 leading-tight"
            >
              Kişisel Blog Sayfama
              <br />
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-5xl md:text-6xl"
              >
                Hoş Geldiniz
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-1 bg-gradient-to-r from-yellow/80 to-yellow-300/60 mx-auto rounded-full mb-8"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Yaratıcılığın sınırlarını zorlayan, ilham dolu hikayeler ve güncel
              içeriklerle dolu dünyamıza adım atın. Her kelime bir keşif, her
              sayfa bir macera.
            </motion.p>
          </motion.div>

          {/* Enhanced Features Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                icon: <FiPenTool className="w-6 h-6 text-yellow-200" />,
                title: "Yaratıcı İçerik",
                desc: "Özgün ve ilham verici yazılar",
                color: "from-white/20 to-gray-300/30",
              },
              {
                icon: <FiTrendingUp className="w-6 h-6 text-yellow-200" />,
                title: "Viral Konular",
                desc: "Dünyayı sallayan başlıklar",
                color: "from-gray-300/25 to-white/20",
              },
              {
                icon: <FiHeart className="w-6 h-6 text-yellow-200" />,
                title: "Duygusal Bağ",
                desc: "Kalbe dokunan hikayeler",
                color: "from-white/25 to-gray-200/20",
              },
              {
                icon: <FiUsers className="w-6 h-6 text-yellow-200" />,
                title: "Güçlü Topluluk",
                desc: "Binlerce aktif okuyucu",
                color: "from-gray-200/30 to-white/25",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -12,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/40 border border-gray-500/30 rounded-2xl p-6 
                         hover:bg-black/60 hover:border-gray-400/50 transition-all duration-500 group
                         backdrop-blur-sm cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl 
                              flex items-center justify-center mb-4 mx-auto
                              transition-all duration-300 backdrop-blur-sm border border-white/10`}
                >
                  <span className="text-white">{feature.icon}</span>
                </motion.div>
                <h3 className="font-bold text-white mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/blog">
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  className="relative w-full sm:w-auto bg-white text-black
                           hover:bg-gray-100 text-lg font-bold px-12 py-6 rounded-xl
                           shadow-lg hover:shadow-2xl hover:shadow-white/40
                           border-0 transition-all duration-500
                           group overflow-hidden"
                >
                  <motion.div
                    animate={{ x: [-100, 300] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent 
                                -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  ></motion.div>

                  <span className="relative flex items-center space-x-3">
                    <FiBookOpen className="w-5 h-5" />
                    <span>Blog&apos;u Keşfet</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiArrowRight className="w-4 h-4" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </Link>

            <Link href="/categories">
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="relative w-full sm:w-auto bg-transparent
                           border-2 border-white/60
                           text-white hover:text-black text-lg font-bold 
                           px-12 py-6 rounded-xl
                           shadow-md hover:shadow-lg hover:shadow-white/30
                           hover:bg-white transition-all duration-500
                           group overflow-hidden backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ x: [-100, 300] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  ></motion.div>

                  <span className="relative flex items-center space-x-3">
                    <FiSearch className="w-5 h-5" />
                    <span>Kategoriler</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    >
                      <FiArrowRight className="w-4 h-4" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-white/25 to-gray-300/20 
                          rounded-full blur-3xl pointer-events-none"
          ></div>
          <div
            className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-tr from-gray-200/25 to-white/20 
                          rounded-full blur-2xl pointer-events-none"
          ></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 text-sm flex flex-col items-center "
          >
            <FiArrowDown className="w-4 h-4" />
            <span className="mt-1">Keşfetmeye devam et</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 
                       bg-clip-text text-transparent"
          >
            Rakamlarla Blog Dünyamız
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Özgün Makale", icon: <FiBookOpen /> },
              { number: "1K+", label: "Aktif Okuyucu", icon: <FiUsers /> },
              { number: "1M+", label: "Aylık Görüntüleme", icon: <FiEye /> },
              { number: "4.9★", label: "Kullanıcı Puanı", icon: <FiStar /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-black/40 backdrop-blur-sm border border-yellow-600/30 
                         rounded-2xl p-8 hover:bg-yellow/60 hover:border-yellow-500/50 transition-all duration-500"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-yellow/20 to-gray-300/30 rounded-2xl 
                           flex items-center justify-center mb-4 mx-auto text-yellow-100/70 text-2xl"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.5,
                    type: "spring",
                  }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Posts Preview */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 
                       bg-clip-text text-transparent"
          >
            Öne Çıkan İçerikler
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Yaratıcılığın Gücü",
                excerpt:
                  "Modern dünyada yaratıcılığın rolü ve önemi üzerine derin bir analiz...",
                readTime: "8 dk",
                category: "Kişisel Gelişim",
              },
              {
                title: "Teknoloji ve Gelecek",
                excerpt:
                  "Yapay zeka çağında insanlığın geleceği nasıl şekillenecek...",
                readTime: "12 dk",
                category: "Teknoloji",
              },
              {
                title: "Minimal Yaşam Sanatı",
                excerpt: "Daha az ile daha çok yaşamanın sırlarını keşfedin...",
                readTime: "6 dk",
                category: "Yaşam Tarzı",
              },
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="bg-black/60 backdrop-blur-sm border border-yellow-600/30 rounded-2xl p-6 
                         hover:bg-black/80 hover:border-gray-500/50 transition-all duration-500 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <FiClock className="w-4 h-4 text-yellow-200/50" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <FiEye className="w-4 h-4" />
                      <span>2.3K</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMessageCircle className="w-4 h-4" />
                      <span>47</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-1 text-white text-sm font-medium"
                  >
                    <span className="text-yellow-200/60">Devamını Oku</span>
                    <FiChevronRight className="w-4 h-4 text-yellow-200/60" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 bg-gradient-to-r from-white/30 to-gray-300/40 rounded-2xl 
                     flex items-center justify-center mb-8 mx-auto"
          >
            <FiZap className="w-10 h-10 text-white" />
          </motion.div>

          <h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 
                       bg-clip-text text-transparent"
          >
            Hiçbir İçeriği Kaçırma
          </h2>

          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            En yeni yazılarımızı, özel içerikleri ve blog dünyasındaki
            gelişmeleri e-posta kutunda ilk sen öğren.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="E-posta adresin"
              className="flex-1 bg-black/60 border border-gray-600/50 rounded-xl px-6 py-4 
                       text-white placeholder-gray-400 focus:border-white/60 focus:outline-none
                       transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-xl font-bold
                       hover:bg-gray-100 transition-all duration-300"
            >
              Abone Ol
            </motion.button>
          </motion.div>

          <p className="text-gray-500 text-sm mt-4">
            Spam yapmıyoruz. İstediğin zaman aboneliği iptal edebilirsin.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Blog Aktif</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <FiGlobe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Günlük Güncelleme</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <FiHeart className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Topluluk Destekli</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {[FiShare2, FiBookmark, FiStar].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                           text-yellow-200 hover:text-yellow-200/50 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
