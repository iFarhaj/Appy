'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FaWhatsapp,
  FaRobot,
  FaWifi,
  FaBatteryFull,
  FaVideo,
  FaPhone,
  FaChevronLeft,
  FaPlus,
  FaCamera,
  FaMicrophone,
  FaPaperPlane,
  FaMicrophoneSlash,
  FaTh,
  FaVolumeUp,
} from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';
import { MdSignalCellular4Bar } from 'react-icons/md';

export default function PhoneMockup() {
  // --- States ---
  const [booted, setBooted] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Interactive States
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showCallInterface, setShowCallInterface] = useState(false);
  const [callType, setCallType] = useState<'video' | 'voice'>('voice');
  const [inputState, setInputState] = useState<'default' | 'recording'>('default');
  const [recordingTime, setRecordingTime] = useState(0);
  const [dynamicIslandExpanded, setDynamicIslandExpanded] = useState(false);

  // Smart Alert State
  const [showSmartAlert, setShowSmartAlert] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Refs
  const recordingInterval = useRef<NodeJS.Timeout | null>(null);

  // --- Effects ---

  // 1. Boot Sequence & Auto Chat Scenario
  useEffect(() => {
    // Startup Delay
    const bootTimer = setTimeout(() => {
      setBooted(true);
      // Open Keyboard after boot like in HTML
      setTimeout(() => setShowKeyboard(true), 500);
    }, 2000);

    return () => clearTimeout(bootTimer);
  }, []);

  // 2. Chat Logic (Once booted)
  useEffect(() => {
    if (booted) {
      // User message
      setTimeout(() => {
        setMessages([
          { id: 1, text: 'سلام، لیست قیمت‌ها رو میخواستم.', time: '10:00', sent: true },
        ]);
      }, 500);

      // Bot typing
      setTimeout(() => setIsTyping(true), 1500);

      // Bot response
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: 2,
            text: '👋 سلام! خوش آمدید.\nمن ربات هوشمند هستم. لطفاً یکی از گزینه‌های زیر را انتخاب کنید:',
            time: '10:00',
            sent: false,
            options: ['تعرفه خدمات', 'ثبت سفارش جدید'],
          },
        ]);
        // Close keyboard when bot replies
        setShowKeyboard(false);
      }, 3500);
    }
  }, [booted]);

  // --- Handlers ---

  const closeAllMenus = () => {
    setShowPlusMenu(false);
    setShowKeyboard(false);
  };

  const triggerSmartAlert = () => {
    // Vibrate if supported
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(50);
    }

    // Shake Animation
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);

    // Show Alert
    setShowSmartAlert(true);
    closeAllMenus();

    // Hide Alert after 6s
    setTimeout(() => setShowSmartAlert(false), 6000);
  };

  const handleMicClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeAllMenus();
    setInputState('recording');
    setRecordingTime(0);

    // Start Timer
    recordingInterval.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);

    // Auto stop after 3s and trigger alert
    setTimeout(() => {
      if (recordingInterval.current) clearInterval(recordingInterval.current);
      setInputState('default');
      triggerSmartAlert();
    }, 3000);
  };

  const handleCameraClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeAllMenus();
    setShowCamera(true);

    // Auto close camera and trigger alert
    setTimeout(() => {
      setShowCamera(false);
      triggerSmartAlert();
    }, 3000);
  };

  const handleCallClick = (type: 'video' | 'voice') => {
    closeAllMenus();
    setCallType(type);
    setShowCallInterface(true);

    // Auto close call and trigger alert
    setTimeout(() => {
      setShowCallInterface(false);
      triggerSmartAlert();
    }, 3000);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      className={`animate-float relative mx-auto h-[640px] w-[300px] transform-gpu rounded-[3.5rem] border-[12px] border-black bg-black shadow-[0_0_0_4px_#444,0_20px_50px_-10px_rgba(0,0,0,0.5)] ring-2 ring-gray-700/50 transition-transform backface-hidden md:h-[660px] md:w-[320px] ${isShaking ? 'animate-shake' : ''}`}
    >
      {/* Hardware Buttons */}
      <div className="absolute top-28 -left-[16px] -z-10 h-10 w-[6px] rounded-l-md border border-r-0 border-gray-500 bg-gray-600 shadow-sm"></div>
      <div className="absolute top-44 -left-[16px] -z-10 h-16 w-[6px] rounded-l-md border border-r-0 border-gray-500 bg-gray-600 shadow-sm"></div>
      <div className="absolute top-64 -left-[16px] -z-10 h-16 w-[6px] rounded-l-md border border-r-0 border-gray-500 bg-gray-600 shadow-sm"></div>
      <div className="absolute top-48 -right-[16px] -z-10 h-24 w-[6px] rounded-r-md border border-l-0 border-gray-500 bg-gray-600 shadow-sm"></div>

      {/* Screen */}
      <div
        className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.8rem] border border-black/50 bg-[#e5ddd5] font-sans dark:bg-[#0b141a]"
        dir="ltr"
        onClick={closeAllMenus}
      >
        {/* --- APP STARTUP SCREEN --- */}
        {!booted && (
          <div
            className="animate-fade-out absolute inset-0 z-[70] flex flex-col items-center justify-center bg-white dark:bg-[#111b21]"
            style={{ animationDelay: '1.5s' }}
          >
            <FaWhatsapp className="mb-40 animate-pulse text-7xl text-[#25D366]" />
            <div className="absolute bottom-10 flex flex-col items-center opacity-80">
              <span className="mb-1 text-[10px] text-gray-500 dark:text-gray-400">from</span>
              <span className="text-[14px] font-bold tracking-widest text-[#25D366] uppercase">
                WhatsBot
              </span>
            </div>
          </div>
        )}

        {/* --- SMART ALERT OVERLAY --- */}
        <div
          className={`pointer-events-none absolute inset-0 z-[60] flex items-center justify-center transition-opacity duration-300 ${showSmartAlert ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="mx-6 scale-90 transform rounded-2xl border border-white/10 bg-black/90 p-5 text-center text-white shadow-2xl backdrop-blur-md"
            dir="rtl"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-lg shadow-green-500/40">
              <FaRobot />
            </div>
            <h3 className="mb-2 text-lg font-black">دست نگه دار! ✋</h3>
            <p className="text-sm leading-relaxed font-medium text-gray-300">
              دیگه نیازی نیست خودت جواب مشتری رو بدی!
            </p>
            <p className="mt-2 inline-block rounded bg-white/10 px-2 py-1 text-xs font-bold text-[#25D366]">
              واتس‌بات خودش انجام میده 😉
            </p>
          </div>
        </div>

        {/* --- CAMERA VIEW --- */}
        <div
          className={`absolute inset-0 z-[55] flex flex-col items-center justify-between bg-black py-8 text-white transition-opacity duration-300 ${showCamera ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <div className="flex w-full justify-between px-6 pt-10">
            <div className="rounded-full bg-black/50 px-2 text-xs">HD</div>
          </div>
          <div className="relative h-64 w-64 border border-white/20">
            <div className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 border border-yellow-400/50"></div>
            <div className="absolute top-1/2 left-1/2 h-2 w-1 -translate-x-1/2 -translate-y-1/2 bg-yellow-400"></div>
            <div className="absolute top-1/2 left-1/2 h-1 w-2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400"></div>
          </div>
          <div className="flex w-full flex-col items-center gap-6 pb-12">
            <div className="flex gap-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
              <span>Video</span>
              <span className="text-yellow-400">Photo</span>
              <span>Portrait</span>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white">
              <div className="h-14 w-14 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* --- CALL INTERFACE --- */}
        <div
          className={`absolute inset-0 z-[55] flex flex-col items-center bg-[#0e161c] pt-20 text-white transition-opacity duration-300 ${showCallInterface ? 'visible opacity-100' : 'invisible opacity-0'}`}
          style={{
            backgroundImage:
              "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
            backgroundBlendMode: 'multiply',
            backgroundColor: 'rgba(14, 22, 28, 0.95)',
          }}
        >
          <div className="flex w-full flex-grow flex-col items-center justify-start pt-10">
            <div className="relative mb-6">
              <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-white/20 bg-white text-5xl text-[#075E54] shadow-2xl">
                <FaRobot />
              </div>
              <div className="absolute top-0 left-0 h-full w-full animate-ping rounded-full bg-[#25D366]/20"></div>
            </div>
            <h2 className="mb-2 text-3xl font-semibold tracking-wide">پشتیبان هوشمند</h2>
            <p className="animate-pulse text-sm font-medium text-gray-400">
              {callType === 'video' ? 'تماس تصویری...' : 'تماس صوتی...'}
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-12 px-8 pb-12">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex flex-col items-center gap-1">
                <div className="ios-call-btn">
                  <FaMicrophoneSlash />
                </div>
                <span className="ios-label">Mute</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="ios-call-btn">
                  <FaTh />
                </div>
                <span className="ios-label">Keypad</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="ios-call-btn">
                  <FaVolumeUp />
                </div>
                <span className="ios-label">Speaker</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="ios-call-btn">
                  <FaPlus />
                </div>
                <span className="ios-label">Add Call</span>
              </div>
            </div>
            <div
              className="mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#ff3b30] text-2xl shadow-lg transition-transform hover:bg-red-600 active:scale-95"
              onClick={(e) => {
                e.stopPropagation();
                setShowCallInterface(false);
              }}
            >
              <FaPhone className="rotate-[135deg] text-white" />
            </div>
          </div>
        </div>

        {/* --- DYNAMIC ISLAND --- */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            setDynamicIslandExpanded(!dynamicIslandExpanded);
          }}
          className={`group animate-subtle-glow absolute top-4 right-0 left-0 z-50 mx-auto flex cursor-pointer flex-col items-center justify-start overflow-hidden rounded-[20px] bg-black transition-all duration-500 hover:scale-[1.02] active:scale-95 ${dynamicIslandExpanded ? 'h-[80px] w-[280px]' : 'h-[35px] w-[120px]'}`}
        >
          {!dynamicIslandExpanded ? (
            <div className="flex h-full w-full items-center justify-end pr-3 transition-opacity">
              <div className="h-3 w-3 rounded-full border border-[#1a1a1a] bg-[#101010] shadow-inner"></div>
            </div>
          ) : (
            <div className="animate-fade-in flex h-full w-full items-center justify-between px-4 pt-1 text-white">
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
                  className="h-6 w-6 rounded-full bg-green-500 p-0.5"
                  alt="Spotify"
                />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-200">Music</span>
                  <span className="text-[10px] text-gray-400">Playing...</span>
                </div>
              </div>
              <div className="flex h-4 items-end gap-1">
                <div className="h-2 w-0.5 animate-[bounce_1s_infinite] bg-green-500"></div>
                <div className="h-3 w-0.5 animate-[bounce_1.2s_infinite] bg-green-500"></div>
                <div className="h-1.5 w-0.5 animate-[bounce_0.8s_infinite] bg-green-500"></div>
              </div>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="pointer-events-none z-30 flex h-14 w-full items-center justify-between px-7 pt-4 text-black select-none dark:text-white">
          <span className="ml-1 text-[15px] font-semibold tracking-wide">9:41</span>
          <div className="mr-1 flex items-center gap-1.5">
            <MdSignalCellular4Bar className="text-[16px]" />
            <FaWifi className="text-[14px]" />
            <FaBatteryFull className="text-[22px]" />
          </div>
        </div>

        {/* --- MAIN APP CONTENT --- */}
        <div className="relative z-10 flex flex-grow flex-col pt-2 transition-all duration-300">
          {/* App Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200/20 bg-[#e5ddd5]/95 px-3 pt-1 pb-3 backdrop-blur-sm dark:bg-[#0b141a]/95">
            <div className="flex items-center gap-2">
              <div className="-ml-1 text-xl text-[#007bfc]">
                <FaChevronLeft />
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-[#075E54] shadow-sm">
                    <FaRobot />
                  </div>
                  <div className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500 dark:border-black"></div>
                </div>
                <div className="flex flex-col items-end" dir="rtl">
                  <h3 className="text-sm leading-tight font-bold text-gray-900 dark:text-white">
                    پشتیبان هوشمند
                  </h3>
                  <p className="text-[10px] leading-tight text-gray-500 dark:text-gray-400">
                    آنلاین
                  </p>
                </div>
              </div>
            </div>
            <div className="mr-1 flex items-center gap-5 text-[#007bfc]">
              <div
                className="animate-heartbeat cursor-pointer text-xl active:scale-90"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCallClick('video');
                }}
              >
                <FaVideo />
              </div>
              <div
                className="animate-heartbeat cursor-pointer text-xl active:scale-90"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCallClick('voice');
                }}
              >
                <FaPhone />
              </div>
            </div>
          </div>

          {/* Messages List */}
          <div
            className="no-scrollbar flex-grow space-y-4 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat p-4 dark:bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f9640.png')]"
            onClick={closeAllMenus}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sent ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`${msg.sent ? 'bg-[#d9fdd3] dark:bg-[#005c4b]' : 'bg-white dark:bg-[#202c33]'} rounded-2xl p-3 ${msg.sent ? 'rounded-tr-none' : 'rounded-tl-none'} relative max-w-[85%] shadow-sm`}
                  dir="rtl"
                >
                  <p className="text-xs leading-5 whitespace-pre-line text-gray-800 dark:text-gray-100">
                    {msg.text}
                  </p>
                  {msg.options && (
                    <ul className="mt-3 space-y-2">
                      {msg.options.map((opt: string, idx: number) => (
                        <li
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            triggerSmartAlert();
                          }}
                          className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2 text-xs text-blue-500 transition-colors hover:bg-[#25D366]/10 dark:border-gray-600 dark:bg-gray-700/50"
                        >
                          {opt}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-1 flex items-center justify-end gap-1">
                    {msg.sent && <BsCheck className="text-[10px] text-blue-500" />}
                    <span className="text-[9px] text-gray-500 dark:text-gray-300">{msg.time}</span>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="mb-2 flex w-16 justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-none bg-white p-3 shadow-sm dark:bg-[#202c33]">
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 dark:bg-gray-500"></div>
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 delay-75 dark:bg-gray-500"></div>
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 delay-150 dark:bg-gray-500"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- ATTACHMENTS MENU (Plus Menu) --- */}
        <div
          className={`absolute bottom-0 left-0 z-30 w-full transform rounded-t-3xl border-t border-gray-200 bg-[#f6f6f6] p-4 transition-transform duration-300 dark:border-gray-700 dark:bg-[#1c1c1e] ${showPlusMenu ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="grid grid-cols-3 gap-4 pb-16">
            {[
              { icon: FaPlus, color: 'purple', label: 'Document' },
              { icon: FaCamera, color: 'pink', label: 'Camera' },
              { icon: FaVideo, color: 'purple-600', label: 'Gallery' },
              { icon: FaPhone, color: 'orange', label: 'Audio' },
              { icon: FaWifi, color: 'green', label: 'Location' },
              { icon: FaRobot, color: 'blue', label: 'Contact' },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex cursor-pointer flex-col items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  triggerSmartAlert();
                }}
              >
                <div
                  className={`h-12 w-12 rounded-full bg-${item.color}-500 flex items-center justify-center text-xl text-white shadow-lg transition-transform group-hover:scale-110`}
                >
                  <item.icon />
                </div>
                <span className="text-[10px] text-gray-600 dark:text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- IOS KEYBOARD --- */}
        <div
          className={`absolute bottom-0 left-0 z-40 flex h-[250px] w-full transform flex-col gap-2 rounded-t-xl bg-[#d1d5db] px-1 pt-2 pb-6 transition-transform duration-300 dark:bg-[#3d3d3d] ${showKeyboard ? 'translate-y-0' : 'translate-y-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mock Keys Row 1 */}
          <div className="flex justify-center gap-1 px-0.5">
            {['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'چ'].map((k) => (
              <div key={k} className="ios-key h-10 flex-grow" onClick={triggerSmartAlert}>
                {k}
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex justify-center gap-1 px-2">
            {['ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ک', 'گ'].map((k) => (
              <div key={k} className="ios-key h-10 flex-grow" onClick={triggerSmartAlert}>
                {k}
              </div>
            ))}
          </div>
          {/* Row 3 */}
          <div className="flex justify-center gap-1 px-1">
            <div
              className="ios-key h-10 w-10 bg-[#b3b6ba] dark:bg-[#5a5a5a]"
              onClick={triggerSmartAlert}
            >
              <FaChevronLeft className="rotate-90" />
            </div>
            {['ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'پ', 'و'].map((k) => (
              <div key={k} className="ios-key h-10 flex-grow" onClick={triggerSmartAlert}>
                {k}
              </div>
            ))}
            <div
              className="ios-key h-10 w-10 bg-[#b3b6ba] dark:bg-[#5a5a5a]"
              onClick={triggerSmartAlert}
            >
              <FaChevronLeft />
            </div>
          </div>
          {/* Row 4 */}
          <div className="mt-1 flex justify-center gap-1 px-1">
            <div
              className="ios-key h-10 w-20 bg-[#b3b6ba] text-xs dark:bg-[#5a5a5a]"
              onClick={triggerSmartAlert}
            >
              123
            </div>
            <div className="ios-key h-10 flex-grow text-xs" onClick={triggerSmartAlert}>
              فاصله
            </div>
            <div
              className="ios-key h-10 w-20 bg-blue-500 text-xs font-bold text-white"
              onClick={(e) => {
                e.stopPropagation();
                setShowKeyboard(false);
              }}
            >
              تایید
            </div>
          </div>
        </div>

        {/* --- INPUT BAR --- */}
        <div
          className="relative z-50 flex items-end gap-2 border-t border-gray-300/50 bg-[#f6f6f6] px-3 pt-2 pb-6 transition-all duration-300 dark:border-gray-700 dark:bg-[#1c1c1e]"
          style={{ transform: showKeyboard ? 'translateY(-250px)' : 'translateY(0)' }}
        >
          {inputState === 'default' ? (
            <div className="flex w-full items-end gap-2">
              <FaPlus
                className={`animate-heartbeat mb-2 cursor-pointer text-xl text-[#007bfc] transition-transform duration-300 ${showPlusMenu ? 'rotate-45' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  closeAllMenus();
                  setShowPlusMenu(!showPlusMenu);
                }}
              />
              <div
                className="flex min-h-[35px] flex-grow cursor-text items-center rounded-2xl border border-gray-200 bg-white px-3 py-1.5 dark:border-gray-600 dark:bg-[#2c2c2e]"
                dir="rtl"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAllMenus();
                  setShowKeyboard(true);
                }}
              >
                <span className="text-sm text-gray-400">پیام...</span>
              </div>
              <FaCamera
                className="animate-heartbeat mb-2 cursor-pointer text-lg text-[#007bfc]"
                onClick={handleCameraClick}
              />
              <FaMicrophone
                className="animate-heartbeat mb-2 cursor-pointer text-lg text-[#007bfc]"
                onClick={handleMicClick}
              />
            </div>
          ) : (
            <div className="animate-fade-in mb-1 flex h-[35px] w-full items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-red-500"></div>
                <span className="font-mono text-sm text-gray-800 dark:text-white">
                  {formatTime(recordingTime)}
                </span>
              </div>
              <span className="flex animate-pulse items-center gap-1 text-xs text-gray-400">
                <FaChevronLeft /> برای لغو بکشید
              </span>
              <FaPaperPlane
                className="cursor-pointer text-xl text-[#007bfc]"
                onClick={triggerSmartAlert}
              />
            </div>
          )}
        </div>

        {/* Home Indicator */}
        <div className="pointer-events-none absolute right-0 bottom-1.5 left-0 z-50 mx-auto h-1.5 w-32 rounded-full bg-black/20 dark:bg-white/20"></div>
      </div>
    </div>
  );
}
