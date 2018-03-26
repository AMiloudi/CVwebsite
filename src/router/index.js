import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Education from '@/components/Education'
import WorkExperience from '@/components/WorkExperience'
import Internships from '@/components/Internships'
import Skills from '@/components/Skills'
import Extra from '@/components/Extra'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    },
    {
      path: '/WorkExperience',
      name: 'Work Experience',
      component: WorkExperience
    },
    {
      path: '/Internships',
      name: 'Internships',
      component: Internships
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Extra',
      name: 'Extra',
      component: Extra
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
