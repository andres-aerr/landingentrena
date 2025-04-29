import React from "react";

// Placeholder components for sections - these would ideally be separate files
const Header = () => (
  <header className='bg-gray-900 text-white py-4 px-6 md:px-10 flex justify-between items-center sticky top-0 z-50'>
    <div className='text-2xl font-bold text-red-600'>ENTRENA</div>{" "}
    {/* Placeholder Logo */}
    <nav className='hidden md:flex space-x-6 items-center'>
      <a href='#inicio' className='hover:text-red-600'>
        Inicio
      </a>
      <a href='#beneficios' className='hover:text-red-600'>
        Beneficios
      </a>
      <a href='#planes' className='hover:text-red-600'>
        Planes
      </a>
      <a href='#testimonios' className='hover:text-red-600'>
        Testimonios
      </a>
      <a href='#faq' className='hover:text-red-600'>
        FAQ
      </a>
      <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        Iniciar sesión
      </button>
    </nav>
    <button className='md:hidden text-white'>
      {" "}
      {/* Placeholder for mobile menu icon */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h16m-7 6h7'
        />
      </svg>
    </button>
  </header>
);

const Hero = () => (
  <section
    id='inicio'
    className='bg-gray-900 text-white py-20 px-6 md:px-10 flex flex-col items-center text-center' // Adjusted alignment
  >
    <div className='max-w-4xl'>
      {" "}
      {/* Added max-width for better centering */}
      <h1 className='text-5xl md:text-6xl font-bold mb-4'>
        Entrena con método, precisión y{" "}
        <span className='text-red-600'>resultados reales</span>
      </h1>
      <p className='text-xl text-gray-300 mb-6'>
        {" "}
        {/* Adjusted text color */}
        Transforma tu cuerpo y tu salud con un entrenamiento personalizado,
        guiado por Jaime Valero, especialista en rendimiento físico con más de
        10 años de experiencia.
      </p>
      <ul className='text-lg text-gray-400 mb-8 space-y-2 list-none text-left mx-auto max-w-xl'>
        {" "}
        {/* Adjusted list styling */}
        <li>
          💡 Metodología basada en ciencia, datos y seguimiento constante.
        </li>
        <li>📊 Planes adaptados a tu nivel, tus tiempos y tus objetivos.</li>
        <li>📱 Todo tu progreso visible desde nuestra plataforma.</li>
      </ul>
      <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
        {" "}
        {/* Adjusted button layout */}
        <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded'>
          Conoce los planes
        </button>
        <button className='border border-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded'>
          Agenda una sesión
        </button>
      </div>
    </div>
    {/* Removed the image section as it wasn't in the new content */}
  </section>
);

const WhyUs = () => (
  <section
    id='beneficios' // Keep the ID for navigation
    className='py-20 px-6 md:px-10 bg-white text-gray-800'
  >
    <h2 className='text-4xl font-bold text-center mb-4'>
      ¿Por qué entrenar con Jaime Valero?
    </h2>
    <p className='text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
      Más que un entrenador, un acompañamiento profesional constante.
    </p>
    {/* Updated grid layout for benefits with icons and styling */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {/* Benefit 1: 100% personalizado */}
      {/* Updated Card Style - Compact */}
      <div className='bg-white border border-red-600 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 flex flex-row items-center'>
        {" "}
        {/* Reduced padding */}
        {/* Icon Container */}
        <div className='bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0'>
          {" "}
          {/* Reduced size and margin */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6' // Reduced icon size
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />{" "}
            {/* Simple User Icon */}
          </svg>
        </div>
        {/* Text Content */}
        <div>
          <h3 className='text-sm font-bold mb-1'>100% personalizado</h3>{" "}
          {/* Final title size reduction */}
          <p className='text-gray-600 text-xs'>
            {" "}
            {/* Keeping description size */}
            Planes únicos para cada alumno, diseñados según tus objetivos y
            necesidades específicas.
          </p>
        </div>
      </div>
      {/* Benefit 2: Atención individual o grupos reducidos */}
      {/* Updated Card Style - Compact */}
      <div className='bg-white border border-red-600 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 flex flex-row items-center'>
        {" "}
        {/* Reduced padding */}
        {/* Icon Container */}
        <div className='bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0'>
          {" "}
          {/* Reduced size and margin */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6' // Reduced icon size
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
            />{" "}
            {/* Group Icon */}
          </svg>
        </div>
        {/* Text Content */}
        <div>
          <h3 className='text-sm font-bold mb-1'>
            {" "}
            {/* Final title size reduction */}
            Atención individual o grupos reducidos
          </h3>
          <p className='text-gray-600 text-xs'>
            {" "}
            {/* Keeping description size */}
            Incluso en clases grupales, Jaime adapta cada rutina según tus
            necesidades individuales.
          </p>
        </div>
      </div>
      {/* Benefit 3: Evaluaciones físicas y nutricionales periódicas */}
      {/* Updated Card Style - Compact */}
      <div className='bg-white border border-red-600 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 flex flex-row items-center'>
        {" "}
        {/* Reduced padding */}
        {/* Icon Container */}
        <div className='bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0'>
          {" "}
          {/* Reduced size and margin */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6' // Reduced icon size
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
            />{" "}
            {/* Bar Chart Icon */}
          </svg>
        </div>
        {/* Text Content */}
        <div>
          <h3 className='text-sm font-bold mb-1'>
            {" "}
            {/* Final title size reduction */}
            Evaluaciones físicas y nutricionales periódicas
          </h3>
          <p className='text-gray-600 text-xs'>
            {" "}
            {/* Keeping description size */}
            Cada 2 meses, para medir tu progreso, ajustar el plan y asegurar que
            sigues avanzando.
          </p>
        </div>
      </div>
      {/* Benefit 4: Prevención de lesiones */}
      {/* Updated Card Style - Compact */}
      <div className='bg-white border border-red-600 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 flex flex-row items-center'>
        {" "}
        {/* Reduced padding */}
        {/* Icon Container */}
        <div className='bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0'>
          {" "}
          {/* Reduced size and margin */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6' // Reduced icon size
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
            />{" "}
            {/* Shield Check Icon */}
          </svg>
        </div>
        {/* Text Content */}
        <div>
          <h3 className='text-sm font-bold mb-1'>Prevención de lesiones</h3>{" "}
          {/* Final title size reduction */}
          <p className='text-gray-600 text-xs'>
            {" "}
            {/* Keeping description size */}
            Consideramos tu historial médico y estado actual para diseñar
            entrenamientos seguros y efectivos.
          </p>
        </div>
      </div>
      {/* Benefit 5: Plataforma de seguimiento */}
      {/* Updated Card Style - Compact */}
      <div className='bg-white border border-red-600 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 flex flex-row items-center'>
        {" "}
        {/* Reduced padding */}
        {/* Icon Container */}
        <div className='bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0'>
          {" "}
          {/* Reduced size and margin */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6' // Reduced icon size
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
            />{" "}
            {/* Device Mobile Icon */}
          </svg>
        </div>
        {/* Text Content */}
        <div>
          <h3 className='text-sm font-bold mb-1'>Plataforma de seguimiento</h3>{" "}
          {/* Final title size reduction */}
          <p className='text-gray-600 text-xs'>
            {" "}
            {/* Keeping description size */}
            Accede a tus cargas de entrenamiento, evaluaciones y rutinas desde
            cualquier dispositivo, en cualquier momento.
          </p>
        </div>
      </div>
      {/* Benefit 6: Rutinas complementarias */}
      {/* Updated Card Style - Compact */}
      <div className='bg-white border border-red-600 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 flex flex-row items-center'>
        {" "}
        {/* Reduced padding */}
        {/* Icon Container */}
        <div className='bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0'>
          {" "}
          {/* Reduced size and margin */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6' // Reduced icon size
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 17l4 4 4-4m-4-5v5m0 0V3'
            />{" "}
            {/* Arrow Down Icon - Placeholder for 'complementary' */}
          </svg>
        </div>
        {/* Text Content */}
        <div>
          <h3 className='text-sm font-bold mb-1'>Rutinas complementarias</h3>{" "}
          {/* Final title size reduction */}
          <p className='text-gray-600 text-xs'>
            {" "}
            {/* Keeping description size */}
            Recibe rutinas adicionales para que puedas seguir entrenando de
            forma autónoma en casa o donde prefieras.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PlatformFeatures = () => (
  <section className='py-20 px-6 md:px-10 bg-red-600 text-white'>
    {" "}
    {/* Changed background to red, text to white */}{" "}
    {/* Light background for contrast */}
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-4xl font-bold mb-4'>¿Qué incluye la plataforma?</h2>
      <p className='text-lg text-red-100 mb-12'>
        {" "}
        {/* Adjusted text color for contrast */}
        Todo lo que necesitas para seguir tu progreso y mantener la motivación.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
        {/* Feature 1 */}
        <div className='flex items-start space-x-3'>
          <div className='bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Visualiza tu progreso físico y tus evaluaciones
            </h3>
            <p className='text-red-100'>
              {" "}
              {/* Adjusted text color for contrast */}
              Gráficos claros y datos detallados para ver cómo mejoras día a
              día.
            </p>
          </div>
        </div>
        {/* Feature 2 */}
        <div className='flex items-start space-x-3'>
          <div className='bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Revisa tus rutinas complementarias desde cualquier lugar
            </h3>
            <p className='text-red-100'>
              {" "}
              {/* Adjusted text color for contrast */}
              Accede a tus entrenamientos adicionales en tu móvil, tablet u
              ordenador.
            </p>
          </div>
        </div>
        {/* Feature 3 */}
        <div className='flex items-start space-x-3'>
          <div className='bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Accede a tus cargas de entrenamiento
            </h3>
            <p className='text-red-100'>
              {" "}
              {/* Adjusted text color for contrast */}
              Consulta pesos, repeticiones y series planificadas y realizadas.
            </p>
          </div>
        </div>
        {/* Feature 4 */}
        <div className='flex items-start space-x-3'>
          <div className='bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-1'>
              Historial completo de tu evolución
            </h3>
            <p className='text-red-100'>
              {" "}
              {/* Adjusted text color for contrast */}
              Todos tus datos y logros almacenados de forma segura y accesible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Plans = () => (
  <section
    id='planes'
    className='py-20 px-6 md:px-10 bg-gray-900 text-white' // Changed background back to dark
  >
    <h2 className='text-4xl font-bold text-center mb-4'>
      {" "}
      {/* Removed text-gray-900 as parent is text-white */}
      Planes de Entrenamiento
    </h2>
    <p className='text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto'>
      Elige el plan que mejor se adapte a tus objetivos y disponibilidad. Todos
      incluyen seguimiento y evaluaciones periódicas.
    </p>
    {/* Grid for the new card design */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
      {/* Plan 1: PEAK PERFORMANCE (Red Theme) */}
      <div className='rounded-lg shadow-lg overflow-hidden flex flex-col'>
        <div className='p-4 bg-gray-700 text-center text-sm text-gray-300'>
          5 sesiones individuales por semana
        </div>
        <div className='p-6 bg-red-600 text-white text-center min-h-28 flex items-center justify-center'>
          {" "}
          {/* Added min-height and flex centering */}
          <h3 className='text-2xl font-bold uppercase'>
            personalizado 1 a 1 elite 5
          </h3>
        </div>
        <div className='p-8 bg-gray-800 text-white text-center'>
          <p className='text-5xl font-bold'>$200.000</p>
          <p className='text-lg text-gray-400 uppercase'>Mensual</p>
        </div>
        <div className='p-6 bg-white text-gray-700 flex-grow'>
          <p className='text-center font-semibold mb-4'>
            El plan más completo para alcanzar tu máximo potencial.
          </p>
          <ul className='space-y-2 text-sm list-disc list-inside mb-6'>
            <li>Entrenador personal exclusivo</li>
            <li>Flexibilidad horaria</li>
            <li>Evaluaciones físicas y nutricionales cada 2 meses</li>
            <li>Plataforma de seguimiento + rutinas complementarias</li>
          </ul>
        </div>
        <button className='w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase py-3 px-4 transition-colors duration-300 mt-auto'>
          Quiero este plan
        </button>
      </div>

      {/* Plan 2: ELITE 3 (Orange Theme) */}
      <div className='rounded-lg shadow-lg overflow-hidden flex flex-col'>
        <div className='p-4 bg-gray-700 text-center text-sm text-gray-300'>
          3 sesiones individuales por semana
        </div>
        <div className='p-6 bg-orange-500 text-white text-center min-h-28 flex items-center justify-center'>
          {" "}
          {/* Added min-height and flex centering */}
          <h3 className='text-2xl font-bold uppercase'>
            Personalizado 1 a 1 – ELITE 3
          </h3>
        </div>
        <div className='p-8 bg-gray-800 text-white text-center'>
          <p className='text-5xl font-bold'>$175.000</p>
          <p className='text-lg text-gray-400 uppercase'>Mensual</p>
        </div>
        <div className='p-6 bg-white text-gray-700 flex-grow'>
          <p className='text-center font-semibold mb-4'>
            Ideal para quienes buscan enfoque personalizado con ritmo más
            flexible.
          </p>
          <ul className='space-y-2 text-sm list-disc list-inside mb-6'>
            <li>Entrenador personal exclusivo</li>
            <li>Flexibilidad horaria</li>
            <li>Evaluaciones físicas y nutricionales cada 2 meses</li>
            <li>Plataforma de seguimiento + rutinas complementarias</li>
          </ul>
        </div>
        <button className='w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase py-3 px-4 transition-colors duration-300 mt-auto'>
          Quiero este plan
        </button>
      </div>

      {/* Plan 3: Small Group – FULL (Blue Theme) */}
      <div className='rounded-lg shadow-lg overflow-hidden flex flex-col'>
        <div className='p-4 bg-gray-700 text-center text-sm text-gray-300'>
          5 sesiones grupales por semana
        </div>
        <div className='p-6 bg-blue-600 text-white text-center min-h-28 flex items-center justify-center'>
          {" "}
          {/* Added min-height and flex centering */}
          <h3 className='text-2xl font-bold uppercase'>Small Group – FULL</h3>
        </div>
        <div className='p-8 bg-gray-800 text-white text-center'>
          <p className='text-5xl font-bold'>$75.000</p>
          <p className='text-lg text-gray-400 uppercase'>Mensual</p>
        </div>
        <div className='p-6 bg-white text-gray-700 flex-grow'>
          <p className='text-center font-semibold mb-4'>
            Entrena con constancia y motivación en grupo reducido.
          </p>
          <ul className='space-y-2 text-sm list-disc list-inside mb-6'>
            <li>Grupos de máximo 6 personas</li>
            <li>Atención personalizada dentro del grupo</li>
            <li>Evaluaciones físicas y nutricionales cada 2 meses</li>
            <li>Plataforma de seguimiento</li>
          </ul>
        </div>
        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase py-3 px-4 transition-colors duration-300 mt-auto'>
          Quiero este plan
        </button>
      </div>

      {/* Plan 4: Small Group – BASIC (Teal Theme) */}
      <div className='rounded-lg shadow-lg overflow-hidden flex flex-col'>
        <div className='p-4 bg-gray-700 text-center text-sm text-gray-300'>
          3 sesiones grupales por semana
        </div>
        <div className='p-6 bg-teal-500 text-white text-center min-h-28 flex items-center justify-center'>
          {" "}
          {/* Added min-height and flex centering */}
          <h3 className='text-2xl font-bold uppercase'>Small Group – BASIC</h3>
        </div>
        <div className='p-8 bg-gray-800 text-white text-center'>
          <p className='text-5xl font-bold'>$57.500</p>
          <p className='text-lg text-gray-400 uppercase'>Mensual</p>
        </div>
        <div className='p-6 bg-white text-gray-700 flex-grow'>
          <p className='text-center font-semibold mb-4'>
            Ideal para comenzar con entrenamiento guiado.
          </p>
          <ul className='space-y-2 text-sm list-disc list-inside mb-6'>
            <li>Grupos de máximo 6 personas</li>
            <li>Atención personalizada dentro del grupo</li>
            <li>Evaluaciones físicas y nutricionales cada 2 meses</li>
            <li>Plataforma de seguimiento</li>
          </ul>
        </div>
        <button className='w-full bg-teal-500 hover:bg-teal-600 text-white font-bold uppercase py-3 px-4 transition-colors duration-300 mt-auto'>
          Quiero este plan
        </button>
      </div>
    </div>
  </section>
);

const EvaluationCTA = () => (
  <section className='py-20 px-6 md:px-10 bg-white text-gray-800'>
    {" "}
    {/* White background */}
    <div className='max-w-3xl mx-auto text-center border border-gray-200 rounded-lg p-10 shadow-md'>
      {" "}
      {/* Added border and padding */}
      <h2 className='text-3xl font-bold mb-4'>Agenda tu evaluación inicial</h2>
      <p className='text-lg text-gray-600 mb-8'>
        ¿No sabes qué plan es mejor para ti? Agenda tu primera sesión y te ayudo
        a elegir el camino correcto.
      </p>
      <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
        {" "}
        {/* Increased spacing */}
        <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded'>
          Agendar evaluación
        </button>
        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded flex items-center justify-center space-x-2'>
          {" "}
          {/* WhatsApp Green */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            {" "}
            {/* WhatsApp Icon */}
            <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
          </svg>
          <span>Escríbeme por WhatsApp</span>
        </button>
      </div>
    </div>
  </section>
);

const TrainerCTA = () => (
  <section className='py-20 px-6 md:px-10 bg-gray-50 text-gray-800'>
    {" "}
    {/* Light gray background */}
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-4xl font-bold mb-4'>
        ¿Eres entrenador? Esta plataforma también es para ti
      </h2>
      <p className='text-lg text-gray-600 mb-10'>
        Entrena fue creada para ofrecer una experiencia de alto nivel a los
        alumnos de Jaime Valero, pero también está disponible para otros
        entrenadores que buscan profesionalizar su servicio.
      </p>

      {/* Features Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 text-left'>
        {/* Feature 1: Gestiona tus alumnos */}
        <div className='flex items-start space-x-3'>
          <div className='bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            {" "}
            {/* Blue icon bg */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-1'>Gestiona tus alumnos</h3>
          </div>
        </div>
        {/* Feature 2: Crea rutinas */}
        <div className='flex items-start space-x-3'>
          <div className='bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-1'>
              Crea rutinas personalizadas con videos
            </h3>
          </div>
        </div>
        {/* Feature 3: Realiza evaluaciones */}
        <div className='flex items-start space-x-3'>
          <div className='bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-1'>
              Realiza evaluaciones físicas y nutricionales
            </h3>
          </div>
        </div>
        {/* Feature 4: Da seguimiento */}
        <div className='flex items-start space-x-3'>
          <div className='bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-1'>
              Da seguimiento desde una plataforma clara y profesional
            </h3>
          </div>
        </div>
        {/* Feature 5: Entrega valor real */}
        <div className='flex items-start space-x-3'>
          <div className='bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-1'>
              Entrega valor real, con control de cargas, historial y resultados
              visibles
            </h3>
          </div>
        </div>
      </div>

      <p className='text-lg text-gray-600 mb-8'>
        Accede a una plataforma validada en terreno, pensada para coaches
        exigentes. Escríbenos para obtener acceso o agendar una demo.
      </p>
      <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded shadow-lg'>
        Quiero usar Entrena como entrenador
      </button>
    </div>
  </section>
);

const Testimonials = () => (
  <section
    id='testimonios'
    className='py-20 px-6 md:px-10 bg-white text-gray-800'
  >
    <h2 className='text-4xl font-bold text-center mb-4'>
      Lo que opinan nuestros usuarios
    </h2>
    <p className='text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
      Descubre cómo la plataforma está transformando la experiencia de
      entrenamiento tanto para alumnos como para profesionales.
    </p>
    {/* Testimonial Carousel Placeholder */}
    <div className='relative max-w-4xl mx-auto'>
      <div className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide space-x-8 pb-4'>
        {/* Testimonial Cards - Add real images/content later */}
        <div className='snap-center shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gray-50 rounded-lg p-6 shadow border border-gray-200'>
          <img
            src='https://via.placeholder.com/80'
            alt='Carlos Rodriguez'
            className='w-20 h-20 rounded-full mx-auto mb-4'
          />
          <h4 className='font-semibold text-center'>Carlos Rodriguez</h4>
          <p className='text-sm text-gray-500 text-center mb-3'>
            Coach Deportivo
          </p>
          <p className='text-gray-600 text-sm mb-4'>
            "Como entrenador, la plataforma me permite llevar un control
            detallado de cada alumno. La posibilidad de adaptar los
            entrenamientos según las evaluaciones hace que mis clientes obtengan
            mejores resultados."
          </p>
          <div className='text-center text-red-500'>★★★★★</div>{" "}
          {/* Star Rating */}
        </div>
        <div className='snap-center shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gray-50 rounded-lg p-6 shadow border border-gray-200'>
          <img
            src='https://via.placeholder.com/80'
            alt='Marta Sánchez'
            className='w-20 h-20 rounded-full mx-auto mb-4'
          />
          <h4 className='font-semibold text-center'>Marta Sánchez</h4>
          <p className='text-sm text-gray-500 text-center mb-3'>
            Alumna Small Group
          </p>
          <p className='text-gray-600 text-sm mb-4'>
            "Pensaba que el entrenamiento en grupo no tendría atención
            personalizada, pero me sorprendió que el coach adapta los ejercicios
            a cada uno. Mis problemas de rodilla son considerados en cada
            sesión."
          </p>
          <div className='text-center text-red-500'>★★★★★</div>{" "}
          {/* Star Rating */}
        </div>
        <div className='snap-center shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gray-50 rounded-lg p-6 shadow border border-gray-200'>
          <img
            src='https://via.placeholder.com/80'
            alt='Daniel López'
            className='w-20 h-20 rounded-full mx-auto mb-4'
          />
          <h4 className='font-semibold text-center'>Daniel López</h4>
          <p className='text-sm text-gray-500 text-center mb-3'>Alumno</p>
          <p className='text-gray-600 text-sm mb-4'>
            "La combinación de evaluaciones físicas y nutricionales ha sido
            clave para mi transformación. En 4 meses he visto cambios que no
            conseguí en años de gimnasio por mi cuenta."
          </p>
          <div className='text-center text-red-500'>★★★★☆</div>{" "}
          {/* Star Rating */}
        </div>
        {/* Add more testimonials as needed */}
      </div>
      {/* Carousel Controls Placeholder */}
      <button className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800 -ml-4'>
        {"<"}
      </button>
      <button className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800 -mr-4'>
        {">"}
      </button>
      {/* Carousel Dots Placeholder */}
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4'>
        <span className='w-3 h-3 bg-red-600 rounded-full'></span>
        <span className='w-3 h-3 bg-gray-300 rounded-full'></span>
        <span className='w-3 h-3 bg-gray-300 rounded-full'></span>
      </div>
    </div>
  </section>
);

// Basic Accordion Item Component (can be improved)
const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='border-b border-gray-200'>
      <button
        className='w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-700 hover:text-red-600 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span> {/* Basic indicator */}
      </button>
      {isOpen && <div className='pb-4 text-gray-600'>{children}</div>}
    </div>
  );
};

const FAQ = () => (
  <section id='faq' className='py-20 px-6 md:px-10 bg-gray-50 text-gray-800'>
    <h2 className='text-4xl font-bold text-center mb-4'>
      Preguntas frecuentes
    </h2>
    <p className='text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
      Resolvemos tus dudas sobre nuestra plataforma y nuestros servicios de
      entrenamiento personalizado.
    </p>
    <div className='max-w-3xl mx-auto'>
      <AccordionItem title='¿Cómo funcionan las evaluaciones físicas y nutricionales?'>
        <p>
          Realizamos evaluaciones completas cada 2 meses para medir tu progreso
          (fuerza, resistencia, composición corporal) y ajustar tu plan
          nutricional según tus objetivos y evolución.
        </p>
      </AccordionItem>
      <AccordionItem title='¿Necesito experiencia previa para unirme a los entrenamientos?'>
        <p>
          No, nuestros programas se adaptan a todos los niveles, desde
          principiantes hasta deportistas avanzados. El coach personalizará los
          ejercicios según tu condición física actual.
        </p>
      </AccordionItem>
      <AccordionItem title='¿Cuál es la diferencia entre los planes Small Group y el entrenamiento 1 a 1?'>
        <p>
          El entrenamiento 1 a 1 ofrece máxima personalización y flexibilidad
          horaria. Los Small Groups mantienen la atención personalizada en un
          entorno grupal motivador, con opciones de 3 o 5 días por semana.
        </p>
      </AccordionItem>
      <AccordionItem title='¿Puedo acceder a mi historial de entrenamientos y evaluaciones en cualquier momento?'>
        <p>
          Sí, a través de nuestra plataforma online tendrás acceso 24/7 a todo
          tu historial, progresos, mediciones y planes de entrenamiento.
        </p>
      </AccordionItem>
      <AccordionItem title='¿Qué sucede si tengo una lesión o condición médica?'>
        <p>
          Es fundamental que nos informes. Adaptaremos tu entrenamiento para
          evitar riesgos y, si es necesario, trabajaremos en conjunto con tu
          médico o fisioterapeuta.
        </p>
      </AccordionItem>
      <AccordionItem title='¿Es posible cambiar de plan o cancelar mi membresía?'>
        <p>
          Sí, ofrecemos flexibilidad. Puedes cambiar de plan según tus
          necesidades o cancelar tu membresía siguiendo los términos y
          condiciones especificados en tu contrato.
        </p>
      </AccordionItem>
    </div>
    <div className='text-center mt-12'>
      <p className='text-gray-600 mb-4'>
        ¿No encuentras respuesta a tu pregunta?
      </p>
      <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded'>
        Contáctanos
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className='bg-gray-900 text-gray-400 py-12 px-6 md:px-10'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
      {/* Logo & Description */}
      <div>
        <div className='text-2xl font-bold text-red-600 mb-4'>ENTRENA</div>{" "}
        {/* Placeholder Logo */}
        <p className='text-sm mb-4'>
          Plataforma de preparación física personalizada que transforma la
          manera en que entrenadores y alumnos gestionan sus programas de
          entrenamiento y evolución.
        </p>
        <div className='flex space-x-4'>
          {/* Social Media Icons Placeholder */}
          <a href='#' className='hover:text-white'>
            FB
          </a>
          <a href='#' className='hover:text-white'>
            IG
          </a>
          <a href='#' className='hover:text-white'>
            TW
          </a>
        </div>
      </div>

      {/* Enlaces */}
      <div>
        <h5 className='text-white font-semibold mb-4'>Enlaces</h5>
        <ul className='space-y-2 text-sm'>
          <li>
            <a href='#inicio' className='hover:text-white'>
              Inicio
            </a>
          </li>
          <li>
            <a href='#beneficios' className='hover:text-white'>
              Beneficios
            </a>
          </li>
          <li>
            <a href='#planes' className='hover:text-white'>
              Planes
            </a>
          </li>
          <li>
            <a href='#testimonios' className='hover:text-white'>
              Testimonios
            </a>
          </li>
          <li>
            <a href='#faq' className='hover:text-white'>
              FAQ
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-white'>
              Iniciar sesión
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-white'>
              Registro
            </a>
          </li>
        </ul>
      </div>

      {/* Contacto */}
      <div>
        <h5 className='text-white font-semibold mb-4'>Contacto</h5>
        <ul className='space-y-2 text-sm'>
          <li className='flex items-start'>
            <span className='mr-2'>📍</span> {/* Icon Placeholder */}
            <span>Calle Ejemplo, 123, Madrid</span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2'>✉️</span> {/* Icon Placeholder */}
            <a href='mailto:info@entrena-vip.com' className='hover:text-white'>
              info@entrena-vip.com
            </a>
          </li>
          <li className='flex items-start'>
            <span className='mr-2'>📞</span> {/* Icon Placeholder */}
            <a href='tel:+34123456789' className='hover:text-white'>
              +34 123 456 789
            </a>
          </li>
        </ul>
      </div>

      {/* Placeholder Column - Maybe for Newsletter or App Links */}
      <div>
        <h5 className='text-white font-semibold mb-4'>Newsletter</h5>
        <p className='text-sm mb-3'>Suscríbete para recibir novedades.</p>
        <input
          type='email'
          placeholder='Tu email'
          className='bg-gray-800 text-white px-3 py-2 rounded w-full text-sm mb-2 focus:outline-none focus:ring-1 focus:ring-red-500'
        />
        <button className='bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded w-full'>
          Suscribirse
        </button>
      </div>
    </div>
    <div className='container mx-auto border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm'>
      <p>&copy; 2025 Entrena VIP. Todos los derechos reservados.</p>
      <div className='flex space-x-4 mt-4 md:mt-0'>
        <a href='#' className='hover:text-white'>
          Términos y condiciones
        </a>
        <a href='#' className='hover:text-white'>
          Política de privacidad
        </a>
        <a href='#' className='hover:text-white'>
          Cookies
        </a>
      </div>
    </div>
  </footer>
);

export const HomePage = () => {
  return (
    <div className='bg-white'>
      {" "}
      {/* Or bg-gray-900 depending on overall theme */}
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <PlatformFeatures />
        <Plans />
        <EvaluationCTA />
        <TrainerCTA />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};
