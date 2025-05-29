const networkBasicTermsQuestions = [
    {
        question: "What is a Point-to-Point topology?",
        options: [
            "A network where all devices are connected to a central hub",
            "A direct connection between two devices",
            "A network where devices are connected in a circle",
            "A network where devices are connected in a mesh pattern"
        ],
        correctAnswer: 1,
        explanation: "A Point-to-Point topology is a direct connection between two devices, like a private phone call between two people."
    },
    {
        question: "Which topology is most commonly used in modern home networks?",
        options: [
            "Bus topology",
            "Ring topology",
            "Star topology",
            "Mesh topology"
        ],
        correctAnswer: 2,
        explanation: "Star topology is most common in home networks because it's easy to manage and devices can be added or removed without affecting others."
    },
    {
        question: "What is the main disadvantage of a Bus topology?",
        options: [
            "It's too expensive",
            "It's too complex to set up",
            "A break in the main cable can bring down the entire network",
            "It's too slow for modern networks"
        ],
        correctAnswer: 2,
        explanation: "In a Bus topology, if the main cable (backbone) breaks, the entire network goes down because all devices share this single connection."
    },
    {
        question: "What is a PAN (Personal Area Network)?",
        options: [
            "A network that connects devices across a city",
            "A network that connects devices within a building",
            "A network that connects personal devices within a 10-meter radius",
            "A network that connects devices across countries"
        ],
        correctAnswer: 2,
        explanation: "A PAN connects personal devices like smartphones, smartwatches, and wireless earbuds within a small area (about 10 meters)."
    },
    {
        question: "What is the main difference between LAN and WLAN?",
        options: [
            "LAN is wireless, WLAN is wired",
            "WLAN uses Wi-Fi, LAN uses cables",
            "LAN is for homes, WLAN is for businesses",
            "LAN is faster than WLAN"
        ],
        correctAnswer: 1,
        explanation: "WLAN (Wireless Local Area Network) uses Wi-Fi technology, while LAN (Local Area Network) typically uses wired connections."
    },
    {
        question: "What is a WAN?",
        options: [
            "A network that connects devices in a single room",
            "A network that connects devices in a building",
            "A network that connects devices across large distances",
            "A network that connects only wireless devices"
        ],
        correctAnswer: 2,
        explanation: "WAN (Wide Area Network) connects devices across large distances, like cities or countries, often maintained by ISPs."
    },
    {
        question: "What is a P2P network?",
        options: [
            "A network with a central server",
            "A network where all devices are equal and can share resources",
            "A network that only uses wireless connections",
            "A network that only uses fiber optic cables"
        ],
        correctAnswer: 1,
        explanation: "In a Peer-to-Peer (P2P) network, all devices are equal and can share resources without needing a central server."
    },
    {
        question: "What is the role of a modem?",
        options: [
            "To connect devices within a building",
            "To translate digital data into signals for internet transmission",
            "To store network data",
            "To protect the network from hackers"
        ],
        correctAnswer: 1,
        explanation: "A modem (modulator-demodulator) converts digital data into signals that can travel over phone lines, cable lines, or fiber."
    },
    {
        question: "What is a Network Interface Card (NIC)?",
        options: [
            "A device that connects to the internet",
            "A card that lets a device join a network",
            "A device that stores network data",
            "A device that protects the network"
        ],
        correctAnswer: 1,
        explanation: "A NIC is a card (often built-in) that allows a device to connect to a network, like the ears and mouth of your computer."
    },
    {
        question: "What is the purpose of a repeater?",
        options: [
            "To store network data",
            "To boost weak signals to extend network range",
            "To connect different networks",
            "To protect the network"
        ],
        correctAnswer: 1,
        explanation: "A repeater takes weak or fading signals and boosts them so they can travel farther, like someone repeating a message across a canyon."
    },
    {
        question: "Why are hubs rarely used in modern networks?",
        options: [
            "They're too expensive",
            "They're too complex to set up",
            "They slow down the network by sending data to all devices",
            "They only work with wireless devices"
        ],
        correctAnswer: 2,
        explanation: "Hubs send data to all connected devices, creating network congestion and slowing down performance, which is why switches are preferred."
    },
    {
        question: "What is the main function of a bridge?",
        options: [
            "To connect to the internet",
            "To store network data",
            "To connect two similar networks and manage traffic",
            "To protect the network"
        ],
        correctAnswer: 2,
        explanation: "A bridge connects two similar networks and manages traffic between them, helping reduce congestion and organize data flow."
    },
    {
        question: "What makes a switch better than a hub?",
        options: [
            "It's cheaper",
            "It's easier to set up",
            "It sends data only to the intended device",
            "It works with wireless devices"
        ],
        correctAnswer: 2,
        explanation: "Unlike a hub, a switch sends data only to the intended device, making the network more efficient and secure."
    },
    {
        question: "What is the main role of a router?",
        options: [
            "To store network data",
            "To connect different networks and direct data",
            "To boost network signals",
            "To protect the network"
        ],
        correctAnswer: 1,
        explanation: "A router connects different networks (like your home network to the internet) and figures out the best path for data to travel."
    },
    {
        question: "What is a Wireless Access Point (WAP)?",
        options: [
            "A device that stores wireless data",
            "A device that lets wireless devices connect to a wired network",
            "A device that protects wireless networks",
            "A device that boosts wireless signals"
        ],
        correctAnswer: 1,
        explanation: "A WAP lets wireless devices connect to a wired network using Wi-Fi, broadcasting a signal that devices can connect to."
    },
    {
        question: "What is an Intranet?",
        options: [
            "The global network of networks",
            "A private network used within an organization",
            "A network that only uses wireless connections",
            "A network that only uses fiber optic cables"
        ],
        correctAnswer: 1,
        explanation: "An Intranet is a private network used within an organization, like a company's internal website and resources."
    },
    {
        question: "What is the main advantage of a Star topology?",
        options: [
            "It's the cheapest option",
            "It's the fastest option",
            "If one device fails, others keep working",
            "It uses the least amount of cable"
        ],
        correctAnswer: 2,
        explanation: "In a Star topology, if one device fails, others continue working because they're connected independently to the central device."
    },
    {
        question: "What is a Mesh topology?",
        options: [
            "A network where all devices are connected to a central hub",
            "A network where devices are connected in a circle",
            "A network where every device is connected to every other device",
            "A network where devices are connected in a line"
        ],
        correctAnswer: 2,
        explanation: "In a Mesh topology, every device is connected to every other device, providing multiple paths for data to travel."
    },
    {
        question: "What is a Hybrid topology?",
        options: [
            "A network that only uses wireless connections",
            "A network that only uses wired connections",
            "A combination of two or more different topologies",
            "A network that only uses fiber optic cables"
        ],
        correctAnswer: 2,
        explanation: "A Hybrid topology combines two or more different topologies to meet specific network needs."
    },
    {
        question: "What is the main purpose of a Network Interface Card (NIC)?",
        options: [
            "To store network data",
            "To protect the network",
            "To allow a device to connect to a network",
            "To boost network signals"
        ],
        correctAnswer: 2,
        explanation: "A NIC allows a device to connect to a network, whether through wired or wireless connections."
    },
    {
        question: "What is the difference between a Wireless NIC and a regular NIC?",
        options: [
            "Wireless NIC is faster",
            "Wireless NIC allows Wi-Fi connections",
            "Wireless NIC is cheaper",
            "Wireless NIC is more secure"
        ],
        correctAnswer: 1,
        explanation: "A Wireless NIC allows devices to connect to networks using Wi-Fi, while a regular NIC uses wired connections."
    },
    {
        question: "What is an Optical Network Card?",
        options: [
            "A card that stores optical data",
            "A card that uses light signals for high-speed data transfer",
            "A card that only works with wireless networks",
            "A card that protects optical networks"
        ],
        correctAnswer: 1,
        explanation: "An Optical Network Card uses light signals to send data at high speeds over fiber optic cables."
    },
    {
        question: "What is the main advantage of a Mesh topology?",
        options: [
            "It's the cheapest option",
            "It's the easiest to set up",
            "It has no single point of failure",
            "It uses the least amount of cable"
        ],
        correctAnswer: 2,
        explanation: "A Mesh topology has no single point of failure because every device is connected to every other device, providing multiple paths for data."
    },
    {
        question: "What is the main disadvantage of a Ring topology?",
        options: [
            "It's too expensive",
            "It's too complex to set up",
            "One device or connection failing can bring down the whole network",
            "It's too slow for modern networks"
        ],
        correctAnswer: 2,
        explanation: "In a Ring topology, if one device or connection fails, the entire network can go down because data travels in a closed loop."
    },
    {
        question: "What is the main advantage of a Bus topology?",
        options: [
            "It's the most secure",
            "It's the fastest",
            "It's simple and uses less cable",
            "It's the most reliable"
        ],
        correctAnswer: 2,
        explanation: "A Bus topology is simple to set up and uses less cable than other topologies, though it's rarely used in modern networks."
    },
    {
        question: "What is the main purpose of a bridge in networking?",
        options: [
            "To connect to the internet",
            "To store network data",
            "To connect and manage traffic between similar networks",
            "To protect the network"
        ],
        correctAnswer: 2,
        explanation: "A bridge connects two similar networks and manages traffic between them, helping reduce congestion and organize data flow."
    },
    {
        question: "What is the main advantage of a switch over a hub?",
        options: [
            "It's cheaper",
            "It's easier to set up",
            "It's more efficient with network traffic",
            "It works with wireless devices"
        ],
        correctAnswer: 2,
        explanation: "A switch is more efficient than a hub because it sends data only to the intended device, reducing network congestion."
    },
    {
        question: "What is the main role of a router in a home network?",
        options: [
            "To store network data",
            "To connect the home network to the internet",
            "To boost network signals",
            "To protect the network"
        ],
        correctAnswer: 1,
        explanation: "A router connects a home network to the internet and directs data traffic between devices and the internet."
    },
    {
        question: "What is the main purpose of a Wireless Access Point (WAP)?",
        options: [
            "To store wireless data",
            "To allow wireless devices to connect to a wired network",
            "To protect wireless networks",
            "To boost wireless signals"
        ],
        correctAnswer: 1,
        explanation: "A WAP allows wireless devices to connect to a wired network using Wi-Fi technology."
    },
    {
        question: "What is the main advantage of a Star topology over a Bus topology?",
        options: [
            "It's cheaper",
            "It uses less cable",
            "It's more reliable",
            "It's faster"
        ],
        correctAnswer: 2,
        explanation: "A Star topology is more reliable than a Bus topology because if one device fails, others continue working."
    },
    {
        question: "What is the main disadvantage of a Mesh topology?",
        options: [
            "It's too simple",
            "It's too slow",
            "It's expensive and complex to install",
            "It's too secure"
        ],
        correctAnswer: 2,
        explanation: "A Mesh topology is expensive and complex to install because every device needs to be connected to every other device."
    },
    {
        question: "What is the main advantage of a Hybrid topology?",
        options: [
            "It's the cheapest option",
            "It's the easiest to set up",
            "It's flexible and can be designed for specific needs",
            "It's the fastest option"
        ],
        correctAnswer: 2,
        explanation: "A Hybrid topology is flexible and can be designed to meet specific network needs by combining different topologies."
    },
    {
        question: "What is the main purpose of a Network Interface Card (NIC)?",
        options: [
            "To store network data",
            "To protect the network",
            "To allow a device to connect to a network",
            "To boost network signals"
        ],
        correctAnswer: 2,
        explanation: "A NIC allows a device to connect to a network, whether through wired or wireless connections."
    },
    {
        question: "What is the main difference between a Wireless NIC and a regular NIC?",
        options: [
            "Wireless NIC is faster",
            "Wireless NIC allows Wi-Fi connections",
            "Wireless NIC is cheaper",
            "Wireless NIC is more secure"
        ],
        correctAnswer: 1,
        explanation: "A Wireless NIC allows devices to connect to networks using Wi-Fi, while a regular NIC uses wired connections."
    },
    {
        question: "What is an Optical Network Card?",
        options: [
            "A card that stores optical data",
            "A card that uses light signals for high-speed data transfer",
            "A card that only works with wireless networks",
            "A card that protects optical networks"
        ],
        correctAnswer: 1,
        explanation: "An Optical Network Card uses light signals to send data at high speeds over fiber optic cables."
    },
    {
        question: "What is the main advantage of a Mesh topology?",
        options: [
            "It's the cheapest option",
            "It's the easiest to set up",
            "It has no single point of failure",
            "It uses the least amount of cable"
        ],
        correctAnswer: 2,
        explanation: "A Mesh topology has no single point of failure because every device is connected to every other device, providing multiple paths for data."
    },
    {
        question: "What is the main disadvantage of a Ring topology?",
        options: [
            "It's too expensive",
            "It's too complex to set up",
            "One device or connection failing can bring down the whole network",
            "It's too slow for modern networks"
        ],
        correctAnswer: 2,
        explanation: "In a Ring topology, if one device or connection fails, the entire network can go down because data travels in a closed loop."
    },
    {
        question: "What is the main advantage of a Bus topology?",
        options: [
            "It's the most secure",
            "It's the fastest",
            "It's simple and uses less cable",
            "It's the most reliable"
        ],
        correctAnswer: 2,
        explanation: "A Bus topology is simple to set up and uses less cable than other topologies, though it's rarely used in modern networks."
    },
    {
        question: "What is the main purpose of a bridge in networking?",
        options: [
            "To connect to the internet",
            "To store network data",
            "To connect and manage traffic between similar networks",
            "To protect the network"
        ],
        correctAnswer: 2,
        explanation: "A bridge connects two similar networks and manages traffic between them, helping reduce congestion and organize data flow."
    },
    {
        question: "What is the main advantage of a switch over a hub?",
        options: [
            "It's cheaper",
            "It's easier to set up",
            "It's more efficient with network traffic",
            "It works with wireless devices"
        ],
        correctAnswer: 2,
        explanation: "A switch is more efficient than a hub because it sends data only to the intended device, reducing network congestion."
    },
    {
        question: "What is the main role of a router in a home network?",
        options: [
            "To store network data",
            "To connect the home network to the internet",
            "To boost network signals",
            "To protect the network"
        ],
        correctAnswer: 1,
        explanation: "A router connects a home network to the internet and directs data traffic between devices and the internet."
    },
    {
        question: "What is the main purpose of a Wireless Access Point (WAP)?",
        options: [
            "To store wireless data",
            "To allow wireless devices to connect to a wired network",
            "To protect wireless networks",
            "To boost wireless signals"
        ],
        correctAnswer: 1,
        explanation: "A WAP allows wireless devices to connect to a wired network using Wi-Fi technology."
    },
    {
        question: "What is the main advantage of a Star topology over a Bus topology?",
        options: [
            "It's cheaper",
            "It uses less cable",
            "It's more reliable",
            "It's faster"
        ],
        correctAnswer: 2,
        explanation: "A Star topology is more reliable than a Bus topology because if one device fails, others continue working."
    },
    {
        question: "What is the main disadvantage of a Mesh topology?",
        options: [
            "It's too simple",
            "It's too slow",
            "It's expensive and complex to install",
            "It's too secure"
        ],
        correctAnswer: 2,
        explanation: "A Mesh topology is expensive and complex to install because every device needs to be connected to every other device."
    },
    {
        question: "What is the main advantage of a Hybrid topology?",
        options: [
            "It's the cheapest option",
            "It's the easiest to set up",
            "It's flexible and can be designed for specific needs",
            "It's the fastest option"
        ],
        correctAnswer: 2,
        explanation: "A Hybrid topology is flexible and can be designed to meet specific network needs by combining different topologies."
    }
]; 