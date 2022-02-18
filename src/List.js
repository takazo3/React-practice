import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';

const ListItem =styled.div`
    padding: 8px 16px;

    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`

export const List = ({ langs }) => { // 変更

    return (
        <TabBodyContainer title = '取扱言語リスト'>
            {
                langs.map((lang, index) => { // 変更
                    return <ListItem key={index}>{lang}</ListItem>
                })
            }
        </TabBodyContainer>
    )
}