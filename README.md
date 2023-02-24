# PRAUD Amplifier

## Objective

Create an app that simulates the experience of purchasing a highly customizable object. The app and its experience should resemble a native app, not a website. The app should work on the provided iPad and most (modern) mobile devices.

## Context/Background

Client was to submit an architectural proposal to LG Space X's 2022 Housing as a Service exhibition in Yeouido. The general concept the client was working under was "Smart Cottage". The client's submission focused on the sensual elements of a "cottage environment" by providing customizable features that would _amplify_ these elements for the user. The requested app would act as an interactive interface to demonstrate the degree of customization and the potential final products to the exhibition vistors.

## Timeline

Start: 2022-11-01
End: 2022-11-30

## Design Planning

The client requested a colorful and "cute" (아기자기한) design with large icons that should always fit onto one screen. The maximum size to design to was an iPad. Visual simplicity was more important than visual clarity and redundancy, so buttons and other controls were kept to a minimum. Custom illustrations were initially requested for the interface, but the client determined at a later date that standard SVG icons were more desirable.

## Technical Planning

The first (software) architectural decision was to develop a progressive web app. This would create the feel of a native app while keeping technical challenges and uncertainties low. The next decision was to implement basic CRUD functionality via local storage. This would minimize development and maintenance complexity.

## Lessons Learned
