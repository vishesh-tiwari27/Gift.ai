import openai
from .env import OPENAI_API_KEY, SERPAPI_KEY

class Config:
    openai_key = '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'
    serpapi_key = '47f16e499edf7dac8b72cb4f0d3985e6f72fc6082774df68264b5d00e4c832a5'
    
    @staticmethod
    def get_openai_key():
        return Config.openai_key
    
    @staticmethod
    def get_serpapi_key():
        return Config.serpapi_key


