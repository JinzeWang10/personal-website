import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'wjz000414@gmail.com',
      href: 'mailto:wjz000414@gmail.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+86) 19921305351',
      href: 'tel:+8619921305351',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jinze-wang-855498251/',
      color: 'hover:text-blue-600',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/JinzeWang10',
      color: 'hover:text-gray-900 dark:hover:text-white',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/jinze_wang1/',
      color: 'hover:text-pink-600',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={ref}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="space-y-12"
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            联系方式 <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <motion.p
            variants={item}
            className="mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-300"
          >
            Let's build something{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">meaningful</span>.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={item}
          className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1 group"
              whileHover={{ scale: 1.05 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  className="flex items-center space-x-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${info.color}
                              flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${info.color}
                              flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {info.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-300">
            Connect with me
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl
                          bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800
                          ${social.color} transition-all duration-300
                          hover:shadow-lg hover:-translate-y-1`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={item}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-0">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              无论是技术交流、项目合作还是职业机会，都欢迎联系我！
            </p>
            <motion.a
              href="mailto:wjz000414@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl
                       bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                       font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Send me an email</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
