import React, { useEffect, useState } from 'react';

export const PageContext = React.createContext('page-context-default');

const PageProvider = props => {
    const [pageStatus, setPageStatus] = useState([
        {
            page: 'about',
            selected: true,
            navItem: true
        },
        {
            page: 'work',
            selected: false,
            navItem: true

        }
    ]);

    const addProjectPages = (pagesToAdd) => {
        const withProjectPages = pageStatus.concat(pagesToAdd.map((item) => {
            return { page: item, selected: false, navPage: false }
        }))
        setPageStatus(withProjectPages)
    }

    const updatePage = (selectedPage) => {
        const updatedPages = pageStatus.map(page => {
            return page.page === selectedPage ? { ...page, selected: true } : { ...page, selected: false }
        })
        setPageStatus(updatedPages)
    }

    useEffect(() => {
        // console.log('pageStatus: ', pageStatus)
    }, [pageStatus])

    return (
        <PageContext.Provider
            value={{
                pageStatus,
                updatePage: (selectedPage) => updatePage(selectedPage),
                addProjectPages: (projectPages) => addProjectPages(projectPages)
            }}>
            {props.children}
        </PageContext.Provider>
    )
};


export default PageProvider