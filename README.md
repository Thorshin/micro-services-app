# E-Commerce Microservices Application

Application e-commerce basée sur une architecture microservices utilisant Spring Cloud et Angular.

## Architecture

Cette application est composée de plusieurs microservices qui communiquent entre eux pour gérer les opérations e-commerce.

### Services d'infrastructure

**Discovery Service**
- Service de découverte basé sur Netflix Eureka Server
- Gère l'enregistrement et la découverte des microservices
- Permet la communication dynamique entre services

**Config Service**
- Service de configuration centralisée basé sur Spring Cloud Config Server
- Gère les configurations des différents microservices depuis le dépôt `config-repo`
- Supporte les profils (dev, prod)

**Gateway Service**
- Point d'entrée unique de l'application basé sur Spring Cloud Gateway
- Route les requêtes vers les microservices appropriés
- Intègre la découverte de services via Eureka

### Services métier

**Customer Service**
- Gestion des clients (création, lecture, mise à jour)
- Utilise Spring Data JPA avec H2 en base de données
- Expose une API REST pour les opérations CRUD sur les clients

**Inventory Service**
- Gestion du catalogue de produits
- Gère le stock et les informations des produits
- Expose une API REST pour les opérations sur les produits

**Billing Service**
- Gestion des factures et des lignes de facturation
- Utilise OpenFeign pour communiquer avec Customer Service et Inventory Service
- Crée des factures associées aux clients et produits

### Application frontend

**Ecom Web App**
- Application Angular 19
- Interface utilisateur pour interagir avec les microservices
- Support du Server-Side Rendering (SSR)

## Technologies

- **Backend**: Spring Boot 3.5.7, Spring Cloud 2025.0.0
- **Frontend**: Angular 19
- **Base de données**: H2 (in-memory)
- **Service Discovery**: Netflix Eureka
- **API Gateway**: Spring Cloud Gateway
- **Configuration**: Spring Cloud Config
- **Communication inter-services**: OpenFeign
- **Java**: 21
- **Build**: Maven

## Structure du projet

```
ecom/
├── discovery-service/      # Service de découverte Eureka
├── config-service/        # Service de configuration centralisée
├── gateway-service/       # API Gateway
├── customer-service/      # Service de gestion des clients
├── inventory-service/     # Service de gestion des produits
├── billing-service/       # Service de gestion des factures
├── ecom-web-app/         # Application Angular frontend
└── config-repo/          # Dépôt de configurations
```

## Démarrage

1. Démarrer le Discovery Service
2. Démarrer le Config Service
3. Démarrer le Gateway Service
4. Démarrer les services métier (Customer, Inventory, Billing)
5. Démarrer l'application Angular frontend

Les services doivent être démarrés dans cet ordre pour permettre la découverte et la configuration correcte.
