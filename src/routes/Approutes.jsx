import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";
import AdminLogin from "../admin/pages/AdminLogin";
import Posts from "../admin/pages/posts";
import AdminDashboard from "../admin/pages/Dashboard";
import CreateBlog from "../admin/pages/CreateBlog";
import EditBlog from "../admin/pages/EditBlog";
import AdminProtectedRoute from "../admin/components/AdminProtectedRoute";
import Portfolio from "../pages/Portfolio";
import ArabicCoursesPage from "../pages/arabic-courses/page";
import GulfArabicPage from "../pages/arabic-courses/gulf-arabic/page";
import FushaArabicPage from "../pages/arabic-courses/fusha-arabic/page";
import ArabicGrammarPage from "../pages/arabic-courses/arabic-grammar/page";
import ArabicPoetryPage from "../pages/arabic-courses/arabic-poetry/page";
import QuranStudiesPage from "../pages/quran-studies/page";
import QaidaPage from "../pages/quran-studies/qaida/page";
import NazraPage from "../pages/quran-studies/nazra/page";
import HifzPage from "../pages/quran-studies/hifz/page";
import IslamicStudiesPage from "../pages/islamic-studies/page";
import HadithPage from "../pages/islamic-studies/hadith/page";
import FiqhPage from "../pages/islamic-studies/fiqh/page";
import EnglishCoursesPage from "../pages/english-courses/page";
import EnglishGrammarPage from "../pages/english-courses/grammar/page";
import EnglishConversationPage from "../pages/english-courses/conversation/page";

function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/arabic-courses" element={<ArabicCoursesPage />} />
      <Route path="/arabic-courses/gulf-arabic" element={<GulfArabicPage />} />
      <Route path="/arabic-courses/fusha-arabic" element={<FushaArabicPage />} />
      <Route path="/arabic-courses/arabic-grammar" element={<ArabicGrammarPage />} />
      <Route path="/arabic-courses/arabic-poetry" element={<ArabicPoetryPage />} />
      <Route path="/quran-studies" element={<QuranStudiesPage />} />
      <Route path="/quran-studies/qaida" element={<QaidaPage />} />
      <Route path="/quran-studies/nazra" element={<NazraPage />} />
      <Route path="/quran-studies/hifz" element={<HifzPage />} />
      <Route path="/islamic-studies" element={<IslamicStudiesPage />} />
      <Route path="/islamic-studies/hadith" element={<HadithPage />} />
      <Route path="/islamic-studies/fiqh" element={<FiqhPage />} />
      <Route path="/english-courses" element={<EnglishCoursesPage />} />
      <Route path="/english-courses/grammar" element={<EnglishGrammarPage />} />
      <Route path="/english-courses/conversation" element={<EnglishConversationPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
      />
      <Route
        path="/admin/posts"
        element={
          <AdminProtectedRoute>
            <Posts />
          </AdminProtectedRoute>
        }
      />
      <Route
        path="/admin/create"
        element={
          <AdminProtectedRoute>
            <CreateBlog />
          </AdminProtectedRoute>
        }
      />
      <Route
        path="/admin/edit/:id"
        element={
          <AdminProtectedRoute>
            <EditBlog />
          </AdminProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Approutes;
