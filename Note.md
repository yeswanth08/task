##### lazy import --> we can only do the lazy import only if the working file has to export 

## why react --> this type of frameworks provide ease in the building interactive webapps by it's virtual dom and state mangament 

> key (recoil) --> it is like an #id of the html element 

***better use import for importing the recoil state variables and also cautious about the key bcs the recoil state var can only be indentified by the key***


##### recoil state updation using selectors 

    > we use get api to fetch the values and set api to update the values 
    > setRecoilstate --> fetches the selector , setRecoilValue --> fetches the recoil value
    

> tailwind css --> instalation in client dir and working on the react dir


> react-router-dom --> 

    first we should define the routing paths of the react and then we should use suspense api to have the sync way to navigate the files and also we can have a sync way of import of files 

    ## use of App.jsx --> it is the file to where we link all the components of the app by using browserrouter, routes, route 
    rest all uses link 

### when you declare the browser router in the parent component there is no use of declaring the router in the child component bcs we can directly access the things under the parent component same for the recoilroot

<RecoilRoot> --> it is like initialize the atom in the recoil react 
so when you initialize again in the child compoenent it creates a new recoil atom and you can't access the updated recoil value


# how to render an array of elements in a div ??
 we can use map for itreation and we should pass a key as a prop to the div and we display the result in the div

