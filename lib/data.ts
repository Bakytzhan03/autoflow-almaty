import {
  BadgeCheck,
  BatteryCharging,
  CalendarCheck,
  Car,
  CircleGauge,
  Droplet,
  Fan,
  Gauge,
  HandCoins,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { Benefit, CarType, Complexity, Service, Testimonial } from "@/types";

export const whatsappUrl =
  "https://wa.me/77000000000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D0%B0.";

export const services: Service[] = [
  {
    id: "diagnostics",
    title: "Диагностика",
    description: "Найдём причину неисправности",
    basePrice: 5000,
    icon: Gauge,
    popular: true,
  },
  {
    id: "suspension",
    title: "Ходовая",
    description: "Проверка и ремонт элементов подвески",
    basePrice: 8000,
    icon: Wrench,
    popular: true,
  },
  {
    id: "oil",
    title: "Замена масла",
    description: "Масло, фильтры и базовое обслуживание",
    basePrice: 6000,
    icon: Droplet,
    popular: true,
  },
  {
    id: "brakes",
    title: "Тормозная система",
    description: "Колодки, диски и диагностика тормозов",
    basePrice: 10000,
    icon: CircleGauge,
    popular: true,
  },
  {
    id: "ac",
    title: "Кондиционер",
    description: "Диагностика и обслуживание системы",
    basePrice: 7000,
    icon: Fan,
  },
  {
    id: "electric",
    title: "Электрика",
    description: "Поиск и устранение электрических неисправностей",
    basePrice: 8000,
    icon: BatteryCharging,
  },
];

export const carTypes: CarType[] = [
  { id: "sedan", label: "Седан", coefficient: 1 },
  { id: "crossover", label: "Кроссовер", coefficient: 1.15 },
  { id: "suv", label: "SUV", coefficient: 1.3 },
  { id: "commercial", label: "Коммерческий", coefficient: 1.5 },
];

export const complexities: Complexity[] = [
  {
    id: "regular",
    label: "Обычная работа",
    hint: "Понятная задача без дополнительных проверок.",
    coefficient: 1,
  },
  {
    id: "diagnostic",
    label: "Требуется диагностика",
    hint: "Нужно найти причину перед ремонтом.",
    coefficient: 1.25,
  },
  {
    id: "complex",
    label: "Сложная неисправность",
    hint: "Несколько симптомов или трудный доступ.",
    coefficient: 1.6,
  },
];

export const benefits: Benefit[] = [
  {
    title: "Прозрачная цена",
    description: "Диапазон стоимости виден до записи, без сюрпризов на приемке.",
    icon: HandCoins,
  },
  {
    title: "Опытные специалисты",
    description: "Мастера работают с городскими седанами, SUV и коммерческим транспортом.",
    icon: BadgeCheck,
  },
  {
    title: "Быстрая запись",
    description: "Можно оставить заявку или сразу перейти в WhatsApp.",
    icon: CalendarCheck,
  },
  {
    title: "Гарантия на работы",
    description: "Фиксируем выполненные работы и объясняем рекомендации простым языком.",
    icon: ShieldCheck,
  },
];

export const howItWorks = [
  {
    number: "01",
    title: "Выбираете услугу",
    text: "Укажите услугу, тип автомобиля и сложность работы.",
  },
  {
    number: "02",
    title: "Получаете ориентировочную стоимость",
    text: "Калькулятор сразу покажет примерный диапазон цены.",
  },
  {
    number: "03",
    title: "Записываетесь в СТО",
    text: "Оставьте телефон или напишите в WhatsApp, чтобы согласовать время.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Алишер",
    car: "Toyota Camry",
    text: "Приехал с вибрацией на торможении. Сначала показали диапазон цены, потом уже после осмотра подтвердили работу. Все спокойно и понятно.",
  },
  {
    name: "Мадина",
    car: "Hyundai Tucson",
    text: "Записалась через WhatsApp, приняли в тот же день. Понравилось, что не давили на лишние работы и объяснили, что можно сделать позже.",
  },
  {
    name: "Руслан",
    car: "Mercedes Sprinter",
    text: "Для коммерческой машины важно быстро вернуться на линию. Диагностику сделали оперативно, цену согласовали до ремонта.",
  },
];

export const visualStats = [
  { label: "Средний расчёт", value: "1 мин" },
  { label: "Запись", value: "WhatsApp" },
  { label: "Фокус", value: "Алматы" },
];

export const heroHighlights = [
  { label: "Проверка до ремонта", icon: Sparkles },
  { label: "Локальные цены", icon: Car },
];
