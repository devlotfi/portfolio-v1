from rest_framework.throttling import UserRateThrottle


class ContactThrottle(UserRateThrottle):
    rate = "1/day"
