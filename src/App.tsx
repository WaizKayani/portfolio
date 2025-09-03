import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';

import WorkExperience from './pages/WorkExperience';
import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import RequestResume from './pages/RequestResume';
import Layout from './Layout';
import Music from './pages/Music';
import Reading from './pages/Reading';
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';
import Hobbies from './pages/Hobbies';
import FutureCareerPlans from './pages/FutureCareerPlans';
import FavouriteShows from './pages/FavouriteShows';
import FavouriteYouTubers from './pages/FavouriteYouTubers';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import AppLoader from './components/AppLoader';

const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLoader isLoading={isAppLoading}>
      <CustomCursor enabled={false} />
      <Routes>
        <Route path="/" element={<Navigate to="/browse" replace />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:profileName" element={
          <PageTransition>
            <Layout><ProfilePage /></Layout>
          </PageTransition>
        } />
        <Route path="/home" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />

        <Route path="/work-experience" element={
          <PageTransition>
            <Layout><WorkExperience /></Layout>
          </PageTransition>
        } />
        <Route path="/recommendations" element={
          <PageTransition>
            <Layout><Recommendations /></Layout>
          </PageTransition>
        } />
        <Route path="/skills" element={
          <PageTransition>
            <Layout><Skills /></Layout>
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <Layout><Projects /></Layout>
          </PageTransition>
        } />
        <Route path="/contact-me" element={
          <PageTransition>
            <Layout><ContactMe /></Layout>
          </PageTransition>
        } />
        <Route path="/request-resume" element={
          <PageTransition>
            <Layout><RequestResume /></Layout>
          </PageTransition>
        } />
        <Route path="/music" element={
          <PageTransition>
            <Layout><Music /></Layout>
          </PageTransition>
        } />
        <Route path="/reading" element={
          <PageTransition>
            <Layout><Reading /></Layout>
          </PageTransition>
        } />
        <Route path="/blogs" element={
          <PageTransition>
            <Layout><Blogs /></Layout>
          </PageTransition>
        } />
        <Route path="/certifications" element={
          <PageTransition>
            <Layout><Certifications /></Layout>
          </PageTransition>
        } />
        <Route path="/hobbies" element={
          <PageTransition>
            <Layout><Hobbies /></Layout>
          </PageTransition>
        } />
        <Route path="/future-career-plans" element={
          <PageTransition>
            <Layout><FutureCareerPlans /></Layout>
          </PageTransition>
        } />
        <Route path="/favourite-shows" element={
          <PageTransition>
            <Layout><FavouriteShows /></Layout>
          </PageTransition>
        } />
        <Route path="/favourite-youtubers" element={
          <PageTransition>
            <Layout><FavouriteYouTubers /></Layout>
          </PageTransition>
        } />
      </Routes>
    </AppLoader>
  );
};

export default App;
