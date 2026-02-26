import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, CheckCircle } from "lucide-react";

export default function EbookLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6 md:p-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Aprende a Generar Ingresos Online con Nuestro Ebook
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Descubre estrategias prácticas y probadas para comenzar tu negocio
            digital desde cero.
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="text-lg px-6 py-6 rounded-2xl shadow-lg">
              Comprar Ahora - $19
            </Button>
            <Button variant="outline" className="text-lg px-6 py-6 rounded-2xl">
              Ver Contenido
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-64 h-80 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <BookOpen className="w-20 h-20 text-indigo-600" />
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">¿Qué aprenderás?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Cómo elegir un nicho rentable", "Estrategias de marketing digital", "Automatización y escalabilidad"].map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-lg">
              <CardContent className="p-6 flex items-start gap-4">
                <CheckCircle className="text-green-500" />
                <p className="text-gray-700">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Lo que dicen nuestros lectores</h2>
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 italic">
              "Gracias a este ebook pude lanzar mi primer negocio online en
              menos de 30 días. ¡Totalmente recomendado!"
            </p>
            <p className="mt-4 font-semibold text-indigo-600">- María G.</p>
          </CardContent>
        </Card>
      </section>

      {/* Email Capture Section */}
      <section className="max-w-4xl mx-auto mt-20">
        <Card className="rounded-2xl shadow-2xl">
          <CardContent className="p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Obtén un capítulo gratis</h2>
            <p className="text-gray-600 mb-6">
              Déjanos tu correo y recibe un adelanto exclusivo del ebook.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Input placeholder="Tu correo electrónico" className="md:w-1/2" />
              <Button className="rounded-2xl px-6">Enviar</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mi Ebook Digital. Todos los derechos reservados.
      </footer>
    </div>
  );
}

