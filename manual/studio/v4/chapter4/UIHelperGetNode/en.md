# Two Automatic Recursive Function on UIHelper #
 
All types of nodes inherited from `Node` support the use of `getChildByName(name)` and `getChildByTag(tag) `to obtain a child of the current node. The two functions are able to meet most of our needs. 

Sometimes we need to get the child nodes of some child nodes, and such demand is common. To get the child nodes layer by layer may take long time and energy. 

For Cocos Studio v1.x, Cocos 2d-x has offered two seek function to help us solve this problem: `seekWidgetByName `& `seekWidgetByTag` in `ui::UIHelper`. The two functions will automatically search each layer until finding the matching object. The above child node type, provided by UIHelper is supposed to be Widget. Nodes created by Cocos Studio may contain Widget and non-Widget types of nodes simultaneously. Therefore previous method is not applicable to the new version of Cocos Studio. The two functions are assumed as Widget type, but they only use the node’s interface. What we need to do is to copy these two functions, and change Widget to Node. The two functions are modified as follows. For JS and Lua users, you can design your own.

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
     