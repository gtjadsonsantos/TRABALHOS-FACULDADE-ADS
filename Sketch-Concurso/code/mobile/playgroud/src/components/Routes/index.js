import HomeScreen  from '../Home'
import SectionScreen from '../Section'
import UserScreen from '../User'
import NotasScreen from '../Notas'
import AlunoScreen from '../Aluno'
import NewUserScreen from '../NewUser'
import  { createAppContainer }  from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions:{
                headerShown: false
            }
        },
        Section: {
            screen: SectionScreen,
            navigationOptions:{
               title:'Section',
               headerShown: false
            } 
        },
        User: {
            screen: UserScreen,
            navigationOptions:{
                title: 'User',
                headerStyle:{
                    backgroundColor: '#10164a',
                },
                headerTitleStyle: {
                    color: '#fff'
                }
            }
        },
        NewUser: {
            screen: NewUserScreen,
            navigationOptions:{
                title: 'Criar Conta',
                headerStyle:{
                    backgroundColor: '#10164a',
                },
                headerTitleStyle: {
                    color: '#fff'
                }
            }
        },
        Notas: {
            screen: NotasScreen,
            navigationOptions: {
                title: 'Lançar Notas',
                headerStyle:{
                    backgroundColor: '#10164a',
                },
                headerTitleStyle: {
                    color: '#fff'
                }
            }
        },
        Aluno: {
            screen: AlunoScreen,
            navigationOptions: {
                title: 'Aluno',
                headerStyle:{
                    backgroundColor: '#10164a',
                },
                headerTitleStyle: {
                    color: '#fff'
                }
            }
        }
    },{
       initialRouteName: 'Home'
    })
) 

export default Routes