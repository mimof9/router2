import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../App'
import About from '../About'
import Repos from '../Repos'
import Repo from '../Repo'
import Home from '../Home'

// /代表根目录 不写代表当前目录 稍微要注意一下
// 考虑一下IndexRoute为什么不需要path 文档原话是:当其他child不匹配是渲染它。但是这不准确，更准确得描述是
// 当exactly匹配时 渲染，也就是精确匹配了父级Route的path渲染
const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
        <Route path='/repos' component={Repos}>
            <Route path=":userName/:repoName" component={Repo}/>
        </Route>
    </Route>
)

export default routes
