import 'static/css/normalize.css'
import 'static/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SearchForm from '@/components/SearchForm/index.vue'
import TablePage from '@/components/TablePage/index.vue'
import Collapse from '@/components/Collapse/index.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import TableColumn from '@/components/TablePage/TableColumn.vue'
import ButtonGroup from '@/components/ButtonGroup/index.vue'
import MeDropdown from '@/components/ButtonGroup/MeDropdown.vue'
import MeDropdownMenu from '@/components/ButtonGroup/MeDropdownMenu.vue'
import MeButton from '@/components/ButtonGroup/MeButton.vue'
import FormItem from '@/components/FormItem'
import DialogForm from '@/components/Dialog/DialogForm'
import SliderRight from '@/components/SliderRight'
export default{
  install (Vue) {
    // import './styles/index.scss'
    Vue.use(ElementUI)
    // Vue.use(mavonEditor)
    Vue.use(Collapse)
    Vue.use(CollapseItem)
    Vue.use(SearchForm)
    Vue.use(SliderRight)
    Vue.use(TablePage)
    Vue.use(TableColumn)
    Vue.use(ButtonGroup)
    Vue.use(MeDropdown)
    Vue.use(MeDropdownMenu)
    Vue.use(MeButton)
    Vue.use(FormItem)
    Vue.use(DialogForm)
  }
}
