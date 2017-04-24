**關於UIHelper的兩個自動遞迴獲取節點的函數**
 
所有繼承自Node類型的節點都支援使用getChildByName(name)和getChildByTag(tag)來獲取當前節點的某個子節點。這兩個函數已經能夠滿足我們大部分的需求，但有時候我們需要獲取某個節點的子節點的子節點,甚至子節點的子節點的子節點,這樣的需求是很常見的，而一層一層去get未免太繁瑣。 

對於Studio 1.x版本，2d-x提供了兩個seek函數來幫我們解決這個問題：seekWidgetByName和seekWidgetByTag，放置在ui::UIHelper中，這兩個函數會自動去搜索各個層，直到搜索到第一個匹配的對象。但是UIHelper提供的兩個函數中假定各個子節點類型為Widget，在2.0的機制下，Studio創建的節點可能同時包含Widget以及非Widget類型的節點，所以原來的方法就不適用新版本了。不過雖然兩個函數假定節點是Widget類型，但都只用到了node的介面，我們只要複製這兩個函數，把其中的Widget改成Node，就能用了。 

修改後的兩個函數如下，照著修改UIHelper的內容。用js和lua的就你們自己寫一個吧：

    Node* seekNodeByTag(Node* root, int tag)
    { 
        if (!root) 
        { 
            return nullptr; 
        } 
        if (root->getTag() == tag) 
        { 
            return root; 
        } 
        const auto& arrayRootChildren = root->getChildren(); 
        ssize_t length = arrayRootChildren.size(); 
        for (ssize_t i=0;i<length;i++) 
        { 
            Node* child = dynamic_cast<Node*>(arrayRootChildren.at(i)); 
            if (child) 
            { 
                Node* res = seekNodeByTag(child,tag); 
                if (res != nullptr) 
                { 
                    return res; 
                } 
            } 
        } 
        return nullptr; 
    } 
     
     
    Node* seekNodeByName(Node* root, const std::string& name) 
    { 
        if (!root) 
        { 
            return nullptr; 
        } 
        if (root->getName() == name) 
        { 
            return root; 
        } 
        const auto& arrayRootChildren = root->getChildren(); 
        for (auto& subWidget : arrayRootChildren) 
        { 
            Node* child = dynamic_cast<Node*>(subWidget); 
            if (child) 
            { 
                Node* res = seekNodeByName(child,name); 
                if (res != nullptr) 
                { 
                    return res; 
                } 
            } 
        } 
        return nullptr; 
    } 
     
