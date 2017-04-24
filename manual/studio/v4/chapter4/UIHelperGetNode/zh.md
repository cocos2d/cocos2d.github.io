**关于UIHelper的两个自动递归获取节点的函数**
 
所有继承自Node类型的节点都支持使用getChildByName(name)和getChildByTag(tag)来获取当前节点的某个子节点。这两个函数已经能够满足我们大部分的需求，但有时候我们需要获取某个节点的子节点的子节点,甚至子节点的子节点的子节点,这样的需求是很常见的，而一层一层去get未免太繁琐。 

对于Studio 1.x版本，2d-x提供了两个seek函数来帮我们解决这个问题：seekWidgetByName和seekWidgetByTag，放置在ui::UIHelper中，这两个函数会自动去搜索各个层，直到搜索到第一个匹配的对象。但是UIHelper提供的两个函数中假定各个子节点类型为Widget，在2.0的机制下，Studio创建的节点可能同时包含Widget以及非Widget类型的节点，所以原来的方法就不适用新版本了。不过虽然两个函数假定节点是Widget类型，但都只用到了node的接口，我们只要复制这两个函数，把其中的Widget改成Node，就能用了。 

修改后的两个函数如下，照着修改UIHelper的内容。用js和lua的就你们自己写一个吧：

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
     